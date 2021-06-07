import './App.css';
import Pokedex from './pokedex/pokedex'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import AppRouter from './rutas/rutas'

function App() {
  return (
    <div className="App">
    <Container>
    
<AppRouter></AppRouter>
</Container>
  </div>
  );
}

export default App;
