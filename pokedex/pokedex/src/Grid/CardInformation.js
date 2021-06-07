import React from 'react';
import  {Card,Button, Container,ListGroup, Modal}from 'react-bootstrap'
import './grid.css'
import Loading from './loader'
import axios from 'axios'
import GridMoves from './moves'
import './grid.css'

const columns = [
    {
     dataField: 'name',
     text: 'Nombre Movimiento'
   },
   {
    dataField: 'move_learn_method',
    text: 'Metodo de aprender'
   }
]

function TipoPoke(arrayTipo)
{
    if(arrayTipo.length ==2)
    {
        return(
            <div style={{weight: '150px'}}>

            <img             
        src= {`${url_img(arrayTipo[0].type.name)}`}
        style={{ width: '60px', padding:"2px" }} />        
                        
        <img             
        src= {`${url_img(arrayTipo[1].type.name)}`}
        style={{ width: '60px', padding:"2px" }}
        />

        </div>
                
        )
    }
    if(arrayTipo.length ==1)
    {
       return(
           <img
           src= {`${url_img(arrayTipo[0].type.name)}`}
           style={{ width: '60px', padding:"2px" }}
           />
           
       )
        
    }

}

class Informacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            pokes:[],
            moves:[],
            nombre:[],            
            generacion:"",
            region:"",
            tempo:[],
            Tipo: []

          }
    }

    async componentDidMount()
    {
        try{                
            this.setState({loading:true});        
            const url = `https://pokeapi.co/api/v2/pokemon/${this.props.ID}`
            const res = await axios.get(url)
            
            if(this.props.ID > 0 && this.props.ID < 152)
            {
                this.setState({region:"Kanto"})
                this.setState({generacion:"Primera generación"})
            }

            if(this.props.ID > 151 && this.props.ID < 252)
            {
                this.setState({region:"Johto"})
                this.setState({generacion:"Segunda generación"})
            }

            if(this.props.ID > 251 && this.props.ID < 386)
            {
                this.setState({region:"Hoenn"})
                this.setState({generacion:"Tercera generación"})
            }

            if(this.props.ID > 386 && this.props.ID < 494)
            {
                this.setState({region:"Sinnoh"})
                this.setState({generacion:"Cuarta generación"})
            }
            if(this.props.ID > 493 && this.props.ID < 650)
            {
                this.setState({region:"Tesselia"})
                this.setState({generacion:"Quinta generación"})
            }
            if(this.props.ID > 649 && this.props.ID < 722)
            {
                this.setState({region:"Kalos"})
                this.setState({generacion:"Sexta generación"})
            }
            if(this.props.ID > 721 && this.props.ID < 810)
            {
                this.setState({region:"Alola"})
                this.setState({generacion:"Septima generación"})
            }
            if(this.props.ID > 810 && this.props.ID < 891)
            {
                this.setState({region:"Galar"})
                this.setState({generacion:"Octava generación"})
            }

            this.setState({Tipo:res.data.types})            

            this.setState({pokes:
                [
                    res.data.sprites["front_default"],
                    res.data.sprites["front_shiny"],                    
                    res.data.abilities[0].ability.name,
                    res.data.base_experience,
                    res.data.name,
                    (res.data.height*0.1).toFixed(1),
                    Math.round(res.data.weight*0.220462), 
                    res.data.stats[0].base_stat,
                    this.state.generacion,
                    this.state.region                                                
                ]
                })
                
                this.state.tempo.push(res.data.moves)                                

                for(var i = 0; i< this.state.tempo[0].length;i++)
                {
                                                            
                    if(this.state.tempo[0][i].version_group_details[0].move_learn_method.name === "machine")
                    {
                        var myArray = {name: this.state.tempo[0][i].move.name, move_learn_method: "MT/MO" }
                    } 
                    
                    if(this.state.tempo[0][i].version_group_details[0].move_learn_method.name === "level-up")
                    {
                        var myArray = {name: this.state.tempo[0][i].move.name, move_learn_method: "Subir de nivel" }
                    }                   

                    if(this.state.tempo[0][i].version_group_details[0].move_learn_method.name === "tutor")
                    {
                        var myArray = {name: this.state.tempo[0][i].move.name, move_learn_method: "Tutor" }
                    }                   


                    

                    this.state.nombre.push(myArray)
                }                

                this.setState({moves:this.state.nombre})                
                                                  
            this.setState({loading:false});
        }
        catch(e)
        {
            console.log(e)
        }   
        
    }
    


    shiny()
    {
        return(
                        
            <button id="myBtn">Open Modal</button>
        )
    }

    render() { 

        const imageClick = () => {
            alert("Versión normal")
          }

          const imageClick2 = () => {
            alert("Versión shiny")
          }
    
        return (  
            <>
             <Loading show = {this.state.loading}/>               

            <div>                                               
            <Container className="Contenedor-Cards">                                                
            <Card style={{ width: '50rem' }} className="Pokemon-card"> 
            <hr></hr>                                
            <h1>{"Nombre: "+this.state.pokes[4]}</h1>
            <Card.Body>                
            <img src={`${this.state.pokes[0]}`} className="Normal" onClick={() => imageClick()}></img>              
            <img src={`${this.state.pokes[1]}`} className="Shiny"  onClick={() => imageClick2()}></img>                                                                 
            <ListGroup variant="flush">   
            <ListGroup.Item>{TipoPoke(this.state.Tipo)}</ListGroup.Item>                                                         
            <ListGroup.Item>{"Región: " + this.state.pokes[9]}</ListGroup.Item>  
            <ListGroup.Item>{this.state.pokes[8]}</ListGroup.Item>
            <ListGroup.Item>{"Habilidad: " + this.state.pokes[2]}</ListGroup.Item>                        
            <ListGroup.Item>{"Experiencia base: " + this.state.pokes[3]}</ListGroup.Item>              
            <ListGroup.Item>{"Stats base: " + this.state.pokes[7]}</ListGroup.Item>               
            </ListGroup>
            </Card.Body>
            </Card>
            </Container>
            <GridMoves columns={columns}
            rows={this.state.moves}
            />                
            </div>
            </>
        );
    }
}

function url_img(name)
{  
  
    if(name === "grass")
    {
        return   ("https://s3.amazonaws.com/kandipatternspatterns/misc/15338_pokemon_grass_type.png")
    }
    if(name === "fairy")
    {
        return  "https://i.pinimg.com/originals/80/18/4b/80184bc7a5688df0b568529579fb4661.png"
    }
    if(name === "normal")
    {
        return  "https://s3.amazonaws.com/kandipatternspatterns/misc/15328_Pokemon_Normal_Type.png"
    }

    if(name === "bug")
    {
        return  "https://i.pinimg.com/originals/c3/ac/58/c3ac580b3b635a8fa0916eb69642cea7.png"
    }
    if(name === "steel")
    {
        return  "https://i.pinimg.com/originals/02/d4/44/02d4448150935c6d6c3bc65298dbd5ed.png"
    }
    if(name === "flying")
    {
        return  "https://pm1.narvii.com/5735/f0abcc91cbc778126e9ebc62fc10883245805898_hq.jpg"
    }

    if(name === "poison")
    {
        return  "https://s3.amazonaws.com/kandipatternspatterns/misc/15330_Pokemon_Poison_Energy.png"
    }
    if(name === "ghost")
    {
        return  "https://i.pinimg.com/originals/31/f2/37/31f2376878923a2d5e70d1b7f38de1c3.png"
    }
    if(name === "water")
    {
        return  "https://i.pinimg.com/originals/0b/60/11/0b60116bc382b1c62a9fe41a61916828.png"
    }

    if(name === "ice")
    {
        return  "https://i.pinimg.com/originals/4a/ec/66/4aec6668f1dcb76b4d7732a512fd5f59.png"
    }
    if(name === "fire")
    {
        return  "https://s3.amazonaws.com/kandipatternspatterns/misc/15327_Pokemon_Fire_Type.png"
    }
    if(name === "rock")
    {
        return  "https://i.pinimg.com/originals/c0/73/d6/c073d68f7d521480004bf067eb970aed.png"
    }

    if(name === "psychic")
    {
        return  "https://i.pinimg.com/originals/8a/ae/6c/8aae6c7e5f6606e2f169621675a4b244.png"
    }
    if(name === "fighting")
    {
        return  "https://i.pinimg.com/originals/c4/2d/cb/c42dcb0934c2c3f25e7ffdbb6682c8a4.png"
    }
    if(name === "dragon")
    {
        return  "https://i.pinimg.com/originals/30/b7/f7/30b7f7d88eed267412049ba49d2cd532.png"
    }

    if(name === "electric")
    {
        return  "https://i.pinimg.com/originals/ae/99/f0/ae99f036a053d152be94b9a825a3c412.png"
    }
    if(name === "ground")
    {
        return  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNiup0NBEqjeBMeRGesWcwvKzwcHMv8CTQSv-Q56bTi_xgjfWQIcc0jZeWps2DheDzwc&usqp=CAU"
    }
    if(name === "dark")
    {
        return  "https://i.pinimg.com/originals/a2/1c/4a/a21c4a4659cb7c08c4de89c66c4c05f6.png"
    }
    
}
 

export default Informacion;