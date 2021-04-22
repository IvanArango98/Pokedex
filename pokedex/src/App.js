import './App.css';
import Pokedex from './pokedex/pokedex'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    <Container>
    
 <Pokedex />
 
</Container>
  </div>
  );
}

export default App;
