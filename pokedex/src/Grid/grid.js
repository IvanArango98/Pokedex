import React from 'react';
import axios from 'axios'
import { Row, Col,Card} from 'react-bootstrap'
import Loading from './loader'
import './grid.css'



const renderCard = (card,index) =>
        {
            return(            
            <Card style={{ width: '18rem' }} key={index} className="box">
            <h2>{card.id}</h2>
            <Card.Img variant="top" src={card.sprite} />
            <Card.Body>
                <Card.Title>{"Nombre: "+card.nombre}                
                </Card.Title>
                <Card.Text>
                {"Tipo: "+card.tipo}
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

export default class DataGrid  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            rows: [],
            pokes:[],
            imgs:[],
            loading:false          
        }  
       
    }
  
     async componentDidMount()
    {
        try{
            for(var i=0;i<290;i++)
            {     
            this.setState({loading:true});        
            const url = `https://pokeapi.co/api/v2/pokemon/${i+1}`
            const res = await axios.get(url) 
            var myArray = {id: res.data.id,nombre: res.data.name,tipo: res.data.types[0].type.name,altura: (res.data.height*0.1).toFixed(1),peso: Math.round(res.data.weight*0.220462),experiencia:res.data.base_experience,
            sprite: res.data.sprites["front_default"]
            }                                        
            this.state.pokes.push(myArray)   
            this.state.imgs.push(res.data.sprites["front_default"])
            } 
            this.setState({rows: this.state.pokes})      
            this.setState({loading:false});
        }
        catch(e)
        {
            console.log(e)
        }   
        
    }
       
    render() { 

        return (            
            <>
            <Loading show = {this.state.loading}/>   
            
            <div className="grid">                          
            {this.state.rows.map(renderCard)}
                 
            </div>
            </>
        
        );
    }
}
 


