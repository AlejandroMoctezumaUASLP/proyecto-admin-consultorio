import { Header, FooterComponent } from './components';
import { Routes, Route } from "react-router-dom";
import { ConsultorioPage, ConsultasPage, MainPage, MedicoPage } from './pages';

/**
 * Componente de la aplicación principal. Cuenta en su interior con todas las rutas de la aplicación
 * @member
 */
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/medicos" element={<MedicoPage />} />
        <Route path="/consultorios" element={<ConsultorioPage />} />
        <Route path="/consultas" element={<ConsultasPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
