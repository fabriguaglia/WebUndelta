import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importaciones de Firebase
import { db } from './firebaseConfig'; // Asegúrate de que la ruta sea correcta
import { collection, addDoc, onSnapshot, doc, updateDoc, query, orderBy } from 'firebase/firestore';
import './Ayuda.css';

// Iconos de Bootstrap (se mantienen igual)
const Calendar = ({ className = "" }) => (
    <i className={`bi bi-calendar ${className}`}></i>
);

const Clock = ({ className = "" }) => (
    <i className={`bi bi-clock ${className}`}></i>
);

const User = ({ className = "" }) => (
    <i className={`bi bi-person ${className}`}></i>
);

const Phone = ({ className = "" }) => (
    <i className={`bi bi-telephone ${className}`}></i>
);

const Mail = ({ className = "" }) => (
    <i className={`bi bi-envelope ${className}`}></i>
);

const Check = ({ className = "" }) => (
    <i className={`bi bi-check-lg ${className}`}></i>
);

const X = ({ className = "" }) => (
    <i className={`bi bi-x-lg ${className}`}></i>
);

const AlertCircle = ({ className = "" }) => (
    <i className={`bi bi-exclamation-circle ${className}`}></i>
);

function Ayuda() {
    const [view, setView] = useState('client');
    // El estado de appointments ahora se llenará desde Firestore
    const [appointments, setAppointments] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        notes: '',
        classroom: ''
    });
    const [adminPassword, setAdminPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [notification, setNotification] = useState(null);
    const [selectedClassroom, setSelectedClassroom] = useState('all');
    const [calendarView, setCalendarView] = useState(false);
    const [loading, setLoading] = useState(true); // Estado para la carga de datos

    const services = [
        'Consulta General',
        'Tratamiento',
        'Revisión',
        'Primera Visita',
        'Seguimiento'
    ];

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    // ** NUEVO: Sincronización de datos con Firestore **
    useEffect(() => {
        const appointmentsCollectionRef = collection(db, 'appointments');
        // Consulta para ordenar por fecha de creación (opcional, ayuda con el orden inicial)
        const q = query(appointmentsCollectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedAppointments = snapshot.docs.map(doc => ({
                id: doc.id, // Firestore usa 'id'
                ...doc.data()
            }));
            setAppointments(fetchedAppointments);
            setLoading(false);
        }, (error) => {
            console.error("Error al obtener los turnos: ", error);
            showNotification('Error al cargar los turnos.', 'error');
            setLoading(false);
        });

        // Limpieza de la suscripción al desmontar el componente
        return () => unsubscribe();
    }, []);

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.service || !formData.classroom) {
            showNotification('Por favor completa todos los campos obligatorios', 'error');
            return;
        }

        const newAppointmentData = {
            ...formData,
            status: 'pending',
            createdAt: new Date().toISOString() // Usa ISO string para mejor ordenamiento y almacenamiento
        };

        try {
            // ** MODIFICADO: Agrega el documento a Firestore **
            await addDoc(collection(db, 'appointments'), newAppointmentData);

            // Limpia el formulario
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                service: '',
                notes: '',
                classroom: ''
            });
            showNotification('¡Turno solicitado con éxito! Te contactaremos pronto.', 'success');
        } catch (error) {
            console.error("Error al solicitar el turno: ", error);
            showNotification('Error al solicitar el turno. Inténtalo de nuevo.', 'error');
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            // ** MODIFICADO: Actualiza el estado en Firestore **
            const appointmentRef = doc(db, 'appointments', id);
            await updateDoc(appointmentRef, {
                status: newStatus
            });
            // El estado 'appointments' se actualizará automáticamente gracias a onSnapshot

            showNotification(
                newStatus === 'approved' ? 'Turno aprobado' : 'Turno rechazado',
                newStatus === 'approved' ? 'success' : 'error'
            );
        } catch (error) {
            console.error("Error al cambiar el estado: ", error);
            showNotification('Error al cambiar el estado del turno.', 'error');
        }
    };

    const handleAdminLogin = () => {
        if (adminPassword === 'admin123') {
            setIsAuthenticated(true);
            showNotification('Acceso concedido', 'success');
        } else {
            showNotification('Contraseña incorrecta', 'error');
        }
    };

    const pendingCount = appointments.filter(apt => apt.status === 'pending').length;

    const filteredAppointments = selectedClassroom === 'all'
        ? appointments
        : appointments.filter(apt => apt.classroom === selectedClassroom);

    const getAppointmentsByDate = () => {
        const grouped = {};
        // Ordena por fecha y luego por hora para la vista de calendario
        const sortedAppointments = [...filteredAppointments].sort((a, b) => {
            const dateA = new Date(`${a.date}T${a.time}`);
            const dateB = new Date(`${b.date}T${b.time}`);
            return dateA - dateB;
        });

        sortedAppointments.forEach(apt => {
            if (!grouped[apt.date]) {
                grouped[apt.date] = [];
            }
            grouped[apt.date].push(apt);
        });
        return grouped;
    };

    const appointmentsByDate = getAppointmentsByDate();

    // ** NUEVO: Muestra un estado de carga **
    if (loading) {
        return (
            <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="mt-2 text-primary">Cargando turnos...</p>
                </div>
            </div>
        );
    }
    // ** FIN: Muestra un estado de carga **


    return (
        <div className="min-vh-100 bg-light">
            {notification && (
                <div className={`alert ${notification.type === 'success' ? 'alert-success' : 'alert-danger'} position-fixed top-0 end-0 m-3`} style={{zIndex: 1050}}>
                    <AlertCircle className="me-2" />
                    {notification.message}
                </div>
            )}

            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-primary mb-3">Sistema de Turnos</h1>
                    <p className="lead text-muted">Solicita tu turno o gestiona las solicitudes</p>
                </div>

                <div className="d-flex justify-content-center gap-3 mb-5">
                    <button
                        onClick={() => setView('client')}
                        // CORREGIDO: Usamos solo btn-custom para el botón activo y se eliminó btn-princ
                        className={`btn ${view === 'client' ? 'btn-custom' : 'btn-outline-primary'} btn-lg custom-focus-fix`}
                    >
                        Solicitar Turno
                    </button>
                    <button
                        onClick={() => setView('admin')}
                        // CORREGIDO: Cambiado btn-primary por btn-custom para el botón activo
                        className={`btn ${view === 'admin' ? 'btn-custom' : 'btn-outline-primary'} btn-lg position-relative custom-focus-fix`}
                    >
                        Panel Administrador
                        {pendingCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {pendingCount}
                            </span>
                        )}
                    </button>
                </div>

                {view === 'client' && (
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card shadow">
                                <div className="card-body p-4">
                                    <h2 className="card-title h3 mb-4">Solicitar un Turno</h2>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                <User className="me-2" />
                                                Nombre Completo
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                className="form-control form-control-lg custom-focus-fix"
                                                placeholder="Juan Pérez"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <Mail className="me-2" />
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                className="form-control form-control-lg custom-focus-fix"
                                                placeholder="juan@ejemplo.com"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <Phone className="me-2" />
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                className="form-control form-control-lg custom-focus-fix"
                                                placeholder="11-1234-5678"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <Calendar className="me-2" />
                                                Fecha
                                            </label>
                                            <input
                                                type="date"
                                                value={formData.date}
                                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                                className="form-control form-control-lg custom-focus-fix"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                <Clock className="me-2" />
                                                Hora
                                            </label>
                                            <input
                                                type="time"
                                                value={formData.time}
                                                onChange={(e) => setFormData({...formData, time: e.target.value})}
                                                className="form-control form-control-lg custom-focus-fix"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                Tipo de Servicio
                                            </label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({...formData, service: e.target.value})}
                                                className="form-select form-select-lg custom-focus-fix"
                                            >
                                                <option value="">Selecciona un servicio</option>
                                                {services.map(service => (
                                                    <option key={service} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                Aula
                                            </label>
                                            <select
                                                value={formData.classroom}
                                                onChange={(e) => setFormData({...formData, classroom: e.target.value})}
                                                className="form-select form-select-lg custom-focus-fix"
                                            >
                                                <option value="">Selecciona un aula</option>
                                                <option value="1">Aula 1</option>
                                                <option value="2">Aula 2</option>
                                                <option value="3">Aula 3</option>
                                                <option value="4">Aula 4</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                Notas Adicionales
                                            </label>
                                            <textarea
                                                value={formData.notes}
                                                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                                className="form-control custom-focus-fix"
                                                rows="3"
                                                placeholder="Detalles adicionales..."
                                            />
                                        </div>

                                        <div className="col-12">
                                            <button
                                                onClick={handleSubmit}
                                                // CORREGIDO: Cambiado btn-primary por btn-custom
                                                className="btn btn-custom btn-lg w-100 py-3 custom-focus-fix"
                                            >
                                                Solicitar Turno
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {view === 'admin' && (
                    <div className="row justify-content-center">
                        <div className="col-12">
                            {!isAuthenticated ? (
                                <div className="card shadow mx-auto" style={{maxWidth: '400px'}}>
                                    <div className="card-body p-4">
                                        <h2 className="card-title h3 mb-4">Acceso Administrador</h2>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">
                                                Contraseña
                                            </label>
                                            <input
                                                type="password"
                                                value={adminPassword}
                                                onChange={(e) => setAdminPassword(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                                                className="form-control form-control-lg custom-focus-fix"
                                                placeholder="Ingresa la contraseña"
                                            />
                                            <div className="form-text">Demo: admin123</div>
                                        </div>
                                        <button
                                            onClick={handleAdminLogin}
                                            // CORREGIDO: Cambiado btn-primary por btn-custom
                                            className="btn btn-custom btn-lg w-100 custom-focus-fix"
                                        >
                                            Ingresar
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="card shadow">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <h2 className="card-title h3 mb-0">Gestión de Turnos</h2>
                                            <div className="d-flex gap-2">
                                                <button
                                                    onClick={() => setCalendarView(!calendarView)}
                                                    // CORREGIDO: Cambiado btn-primary por btn-custom para el botón activo
                                                    className={`btn ${calendarView ? 'btn-custom' : 'btn-outline-primary'} custom-focus-fix`}
                                                >
                                                    {calendarView ? 'Vista Lista' : 'Vista Calendario'}
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setIsAuthenticated(false);
                                                        setAdminPassword('');
                                                    }}
                                                    className="btn btn-outline-secondary"
                                                >
                                                    Cerrar Sesión
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label fw-semibold">Filtrar por Aula</label>
                                            <div className="d-flex gap-2 flex-wrap">
                                                <button
                                                    onClick={() => setSelectedClassroom('all')}
                                                    // CORREGIDO: Cambiado btn-primary por btn-custom para el botón activo
                                                    className={`btn ${selectedClassroom === 'all' ? 'btn-custom' : 'btn-outline-primary'} custom-focus-fix`}
                                                >
                                                    Todas
                                                </button>
                                                {['1', '2', '3', '4'].map(classroom => (
                                                    <button
                                                        key={classroom}
                                                        onClick={() => setSelectedClassroom(classroom)}
                                                        // CORREGIDO: Cambiado btn-primary por btn-custom para el botón activo
                                                        className={`btn ${selectedClassroom === classroom ? 'btn-custom' : 'btn-outline-primary'} custom-focus-fix`}
                                                    >
                                                        Aula {classroom}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {calendarView ? (
                                            <div>
                                                <h3 className="h4 mb-3">Calendario de Turnos</h3>
                                                {Object.keys(appointmentsByDate).length === 0 ? (
                                                    <div className="text-center py-5 text-muted">
                                                        <Calendar className="display-1 opacity-25 mb-3" />
                                                        <p className="h5">No hay turnos para mostrar</p>
                                                    </div>
                                                ) : (
                                                    <div className="space-y-4">
                                                        {Object.keys(appointmentsByDate).sort().map(date => (
                                                            <div key={date} className="border rounded p-3 mb-4">
                                                                <h4 className="h5 mb-3">
                                                                    <Calendar className="me-2" />
                                                                    {new Date(date + 'T00:00:00').toLocaleDateString('es-ES', {
                                                                        weekday: 'long',
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric'
                                                                    })}
                                                                </h4>
                                                                <div className="row g-3">
                                                                    {appointmentsByDate[date].sort((a, b) => a.time.localeCompare(b.time)).map(apt => (
                                                                        <div key={apt.id} className="col-md-6 col-lg-3">
                                                                            <div className={`card h-100 border-start-4 ${
                                                                                apt.status === 'pending' ? 'border-warning' :
                                                                                apt.status === 'approved' ? 'border-success' :
                                                                                'border-danger'
                                                                            }`}>
                                                                                <div className="card-body">
                                                                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                                                                        <span className="fw-bold">{apt.time}</span>
                                                                                        <span className="badge bg-primary">
                                                                                            Aula {apt.classroom}
                                                                                        </span>
                                                                                    </div>
                                                                                    <h6 className="card-title">{apt.name}</h6>
                                                                                    <p className="card-text small">{apt.service}</p>
                                                                                    <span className={`badge ${
                                                                                        apt.status === 'pending' ? 'bg-warning' :
                                                                                         apt.status === 'approved' ? 'bg-success' :
                                                                                        'bg-danger'
                                                                                    }`}>
                                                                                        {apt.status === 'pending' ? 'Pendiente' :
                                                                                         apt.status === 'approved' ? 'Aprobado' : 'Rechazado'}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <>
                                                {filteredAppointments.length === 0 ? (
                                                    <div className="text-center py-5 text-muted">
                                                        <Calendar className="display-1 opacity-25 mb-3" />
                                                        <p className="h5">No hay turnos solicitados aún</p>
                                                    </div>
                                                ) : (
                                                    <div className="row g-4">
                                                        {filteredAppointments.map(apt => (
                                                            // Usa apt.id que ahora es el ID de Firestore
                                                            <div key={apt.id} className="col-12">
                                                                <div className={`card ${
                                                                    apt.status === 'pending' ? 'border-warning' :
                                                                    apt.status === 'approved' ? 'border-success' :
                                                                    'border-danger'
                                                                }`}>
                                                                    <div className="card-body">
                                                                        <div className="d-flex justify-content-between align-items-start">
                                                                            <div className="flex-grow-1">
                                                                                <div className="d-flex align-items-center gap-2 mb-3">
                                                                                    <h5 className="card-title mb-0">{apt.name}</h5>
                                                                                    <span className={`badge ${
                                                                                        apt.status === 'pending' ? 'bg-warning' :
                                                                                        apt.status === 'approved' ? 'bg-success' :
                                                                                        'bg-danger'
                                                                                    }`}>
                                                                                        {apt.status === 'pending' ? 'Pendiente' :
                                                                                         apt.status === 'approved' ? 'Aprobado' : 'Rechazado'}
                                                                                    </span>
                                                                                    <span className="badge bg-primary">
                                                                                        Aula {apt.classroom}
                                                                                    </span>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-md-6">
                                                                                        <p><Mail className="me-2" />{apt.email}</p>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <p><Phone className="me-2" />{apt.phone}</p>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <p><Calendar className="me-2" />{apt.date}</p>
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        <p><Clock className="me-2" />{apt.time}</p>
                                                                                    </div>
                                                                                    <div className="col-12">
                                                                                        <p><strong>Servicio:</strong> {apt.service}</p>
                                                                                    </div>
                                                                                    {apt.notes && (
                                                                                        <div className="col-12">
                                                                                            <p><strong>Notas:</strong> {apt.notes}</p>
                                                                                        </div>
                                                                                    )}
                                                                                    <div className="col-12">
                                                                                        <small className="text-muted">Solicitado: {new Date(apt.createdAt).toLocaleString()}</small>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {apt.status === 'pending' && (
                                                                                <div className="d-flex gap-2 ms-3">
                                                                                    <button
                                                                                        onClick={() => handleStatusChange(apt.id, 'approved')}
                                                                                        className="btn btn-success custom-focus-fix"
                                                                                        title="Aprobar"
                                                                                    >
                                                                                        <Check />
                                                                                    </button>
                                                                                    <button
                                                                                        onClick={() => handleStatusChange(apt.id, 'rejected')}
                                                                                        className="btn btn-danger custom-focus-fix"
                                                                                        title="Rechazar"
                                                                                    >
                                                                                        <X />
                                                                                    </button>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Ayuda;