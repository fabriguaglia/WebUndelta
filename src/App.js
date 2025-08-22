import Menu from './components/Menu/Menu.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact.jsx';
import SobreNosotros from './components/Sobre nosotros/sobre-nosotros.jsx';
import Carreras from './components/Carreras/Carreras.jsx';
import PreguntasFrecuentes from './components/preguntas-frecuentes/preguntas-frecuentes';
import InscripcionPage from './components/Inscripcion/inscripcion.jsx';
import Transparencia from './components/Transparencia/transparencia.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path='/Carreras' element={<Carreras />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/Inscripcion" element={<InscripcionPage />} />
          <Route path="/transparencia" element={<Transparencia />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
