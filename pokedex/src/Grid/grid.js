import React, { useState } from 'react';
import './grid.css'
import Informacion from './CardInformation'
import SimpleCard from './SimpleCard'
import {Card} from 'react-bootstrap'


const DataGrid = () =>
{
    const [ID_POKE, setID] = useState("")
    const [condicion, setCondicion] = useState(false) 
    
  function infoPoke(ID)
  {
      setID(ID);
      setCondicion(true)
  }
  
const renderCard = (card,index) =>
{
      return(            
      <Card style={{ width: '18rem' }} key={index} className="box"                  
      >
      <h2>{card.id}</h2>
      <Card.Img variant="top" src={card.sprite} 
      onClick = {() => infoPoke(card.id +"")}
      />
      <Card.Body>
          <Card.Title>{"| Nombre | "+card.nombre}                
          </Card.Title>
          <Card.Text>
          {<img src={`${card.tipo}`} style={{ width: '60px' }}></img>  }
          <hr></hr>
          {"Peso: "+card.peso + " lb"}
          <hr></hr>
          {"Altura: "+card.altura + " m"}
          <hr></hr>                
          <Card.Link href={`https://www.pokemon.com/el/pokedex/${card.nombre}`}>Más Información</Card.Link>
          </Card.Text>                
      </Card.Body>
      </Card>
      )
}

function Poke() {
  
if(condicion === false)
{
  return (
      <SimpleCard render={renderCard}/>
  )  
}
else
{
  return(
  <Informacion ID={ID_POKE}></Informacion>
  )
}

}

    return (
        <div>
        <Poke/>
        </div>  
    )
}

export default DataGrid;




