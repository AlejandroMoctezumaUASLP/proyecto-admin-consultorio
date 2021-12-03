import logo from './logo.svg';
import styles from './App.module.css';
import { Header, MDrawer, CardItem } from './components';
import { Routes, Route, Link } from "react-router-dom";
import { ConsultorioPage, MainPage, MedicoPage } from './pages';
import { FooterComponent } from './components/Footer/FooterComponent';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/medicos" element={<MedicoPage />} />
        <Route path="/consultorios" element={<ConsultorioPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
