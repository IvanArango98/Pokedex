import React from 'react';
import {Container} from 'react-bootstrap'
import DataGrid from '../Grid/grid'
import './pokedex.css'

const columns = [
 {
  dataField: 'nombre',
  text: 'nombre'
}, {
  dataField: 'tipo',
  text: 'tipo'
}
, {
    dataField: 'altura',
    text: 'altura'
  }
  , {
    dataField: 'peso',
    text: 'peso'
  }
  , {
    dataField: 'experiencia',
    text: 'experiencia'
  },
  , {
    dataField: 'sprite',
    text: 'Sprite'
  }
];

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  

      <Container id="Contenedor">
      
      <div className="Titulo">
        <hr></hr>
          <h2>Pokedex</h2>      
          <hr></hr>
          </div>
                 
      <DataGrid
            columns={columns}            
            />       

      </Container>

    );
  }
}
 
export default Pokedex;

 
 