import logo from './logo.svg';
import styles from './App.module.css';
import { Header, MDrawer, CardItem } from './components';

function App() {
  const props = {
    "numero_turno": 1,
    "consultorio": "Dr. Simi",
    "medico": "Dr. Angel",
    "direccion": "Hogares Ferrocariles, Calle 2096",
    "telefono": "4444444444",
    "prioridad": "Urgente"
  }
  return (
    <div>
      <Header></Header>
      <div className={`${styles.listContainer}`}>
      {
        Array.from(Array(12).keys()).map((item, key) => (
          <CardItem 
            className={`${styles.listItem}`} 
            key={key} 
            {...props}
          >
          </CardItem>
        ))
      }
      </div>
    </div>
  );
}

export default App;
