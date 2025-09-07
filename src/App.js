import Menu from './components/Menu/Menu.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact.jsx';
import SobreNosotros from './components/Sobre nosotros/sobre-nosotros.jsx';
import Carreras from './components/Carreras/Carreras.jsx';
import LicCieDat from './components/Carreras-Info/CieDat/LicCieDat/LicCieDat.jsx';
import TecCieDat from './components/Carreras-Info/CieDat/TecCieDat/TecCieDat.jsx';
import PreguntasFrecuentes from './components/preguntas-frecuentes/preguntas-frecuentes';
import InscripcionPage from './components/Inscripcion/inscripcion.jsx';
import Transparencia from './components/Transparencia/transparencia.jsx';
import Eventos from './components/Eventos/eventos.jsx';
import Extension from './components/extension-undelta/extension-undelta.jsx';
import LicTurDes from './components/Carreras-Info/TurDesSos/LicTurDes/LicTurDes.jsx';
import TecTurDes from './components/Carreras-Info/TurDesSos/TecTurDes/TecTurDes.jsx';
import LicRelInt from './components/Carreras-Info/RelInt/LicRelInt/LicRelInt.jsx';
import TecRelInt from './components/Carreras-Info/RelInt/TecRelInt/TecRelInt.jsx';
import LicGesIns from './components/Carreras-Info/GesIns/LicGesIns.jsx';
import TecGesIns from './components/Carreras-Info/DesEme/TecDesEme.jsx';
import DipCiePri from './components/Diplomaturas-Info/CiePriv/DipCiePri.jsx';
import DipGesDep from './components/Diplomaturas-Info/GesDep/DipGesDep.jsx';
import DipGesRie from './components/Diplomaturas-Info/GesRie/DipGesRie.jsx';
import DipInvCri from './components/Diplomaturas-Info/InvCri/DipInvCri.jsx';
import DipDerHum from './components/Diplomaturas-Info/DerHum/DipDerHum.jsx';
import DipRedInf from './components/Diplomaturas-Info/RedInf/DipRedInf.jsx';
import DipAutCli from './components/Diplomaturas-Info/AutCli/DipAutCli.jsx';
import DipGesEmp from './components/Diplomaturas-Info/DesEmp/DipDesEmp.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path='/Carreras' element={<Carreras />} />
            <Route path='/Carreras/LicCieDat' element={<LicCieDat />} />
            <Route path='/Carreras/TecCieDat' element={<TecCieDat />} />
            <Route path="/Carreras/LicTurDes" element={<LicTurDes />} />
            <Route path="/Carreras/TecTurSos" element={<TecTurDes />} />
            <Route path="/Carreras/LicRelInt" element={<LicRelInt />} />
            <Route path="/Carreras/TecRelInt" element={<TecRelInt />} />
            <Route path="/Carreras/LicGesIns" element={<LicGesIns />} />
            <Route path="/Carreras/TecGesIns" element={<TecGesIns />} />
            <Route path="/Diplomaturas/DipCiePri" element={<DipCiePri />} />
            <Route path="/Diplomaturas/DipGesDep" element={<DipGesDep />} />
            <Route path="/Diplomaturas/DipGesRie" element={<DipGesRie />} />
            <Route path="/Diplomaturas/DipInvCri" element={<DipInvCri />} />
            <Route path="/Diplomaturas/DipDerHum" element={<DipDerHum />} />
            <Route path="/Diplomaturas/DipRedInf" element={<DipRedInf />} />
            <Route path="/Diplomaturas/DipAutCli" element={<DipAutCli />} />
            <Route path="/Diplomaturas/DipDesEmp" element={<DipGesEmp />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/Inscripcion" element={<InscripcionPage />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/extension-undelta" element={<Extension />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
