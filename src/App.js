import Menu from './components/Menu/Menu.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact.jsx';
import SobreNosotros from './components/Sobre nosotros/sobre-nosotros.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
