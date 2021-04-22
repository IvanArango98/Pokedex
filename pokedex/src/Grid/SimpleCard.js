import React from 'react';
import Loading from './loader'
import axios from 'axios'
import './grid.css'

class SimpleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            rows: [],
            pokes:[],
            imgs:[],
            loading:false,
            tipo:"",
            nombre:""
        }
        
    }
    
    async componentDidMount()
    {
        try{
            for(var i=0;i<251;i++)
            {     
            this.setState({loading:true});        
            const url = `https://pokeapi.co/api/v2/pokemon/${i+1}`
            const res = await axios.get(url) 
            this.setState({tipo:res.data.types[0].type.name})

            if(this.state.tipo === "grass")
            {
                this.setState({tipo:"https://s3.amazonaws.com/kandipatternspatterns/misc/15338_pokemon_grass_type.png"})
            }
            if(this.state.tipo === "fairy")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/80/18/4b/80184bc7a5688df0b568529579fb4661.png"})
            }
            if(this.state.tipo === "normal")
            {
                this.setState({tipo:"https://s3.amazonaws.com/kandipatternspatterns/misc/15328_Pokemon_Normal_Type.png"})
            }

            if(this.state.tipo === "bug")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/c3/ac/58/c3ac580b3b635a8fa0916eb69642cea7.png"})
            }
            if(this.state.tipo === "steel")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/02/d4/44/02d4448150935c6d6c3bc65298dbd5ed.png"})
            }
            if(this.state.tipo === "flying")
            {
                this.setState({tipo:"https://pm1.narvii.com/5735/f0abcc91cbc778126e9ebc62fc10883245805898_hq.jpg"})
            }

            if(this.state.tipo === "poison")
            {
                this.setState({tipo:"https://s3.amazonaws.com/kandipatternspatterns/misc/15330_Pokemon_Poison_Energy.png"})
            }
            if(this.state.tipo === "ghost")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/31/f2/37/31f2376878923a2d5e70d1b7f38de1c3.png"})
            }
            if(this.state.tipo === "water")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/0b/60/11/0b60116bc382b1c62a9fe41a61916828.png"})
            }

            if(this.state.tipo === "ice")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/4a/ec/66/4aec6668f1dcb76b4d7732a512fd5f59.png"})
            }
            if(this.state.tipo === "fire")
            {
                this.setState({tipo:"https://s3.amazonaws.com/kandipatternspatterns/misc/15327_Pokemon_Fire_Type.png"})
            }
            if(this.state.tipo === "rock")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/c0/73/d6/c073d68f7d521480004bf067eb970aed.png"})
            }

            if(this.state.tipo === "psychic")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/8a/ae/6c/8aae6c7e5f6606e2f169621675a4b244.png"})
            }
            if(this.state.tipo === "fighting")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/c4/2d/cb/c42dcb0934c2c3f25e7ffdbb6682c8a4.png"})
            }
            if(this.state.tipo === "dragon")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/30/b7/f7/30b7f7d88eed267412049ba49d2cd532.png"})
            }

            if(this.state.tipo === "electric")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/ae/99/f0/ae99f036a053d152be94b9a825a3c412.png"})
            }
            if(this.state.tipo === "ground")
            {
                this.setState({tipo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNiup0NBEqjeBMeRGesWcwvKzwcHMv8CTQSv-Q56bTi_xgjfWQIcc0jZeWps2DheDzwc&usqp=CAU"})
            }
            if(this.state.tipo === "dark")
            {
                this.setState({tipo:"https://i.pinimg.com/originals/a2/1c/4a/a21c4a4659cb7c08c4de89c66c4c05f6.png"})
            }

            this.setState({nombre: res.data.name})   
                        

            var myArray = {id: res.data.id,nombre: this.state.nombre,tipo: this.state.tipo,altura: (res.data.height*0.1).toFixed(1),peso: Math.round(res.data.weight*0.220462),experiencia:res.data.base_experience,
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
            {this.state.rows.map(this.props.render)}
                 
            </div>
            </>

         );
    }
}
 
export default SimpleCard;