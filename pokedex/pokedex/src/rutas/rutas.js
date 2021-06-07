import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Pokedex from '../pokedex/pokedex'
import Informacion from '../Grid/CardInformation'

export default function AppRouter()
{
    return(
            <Router>
                <Switch>
                    <Route exact path={["/","/pokedex"]} component={Pokedex}/>                    
                    <Route exact path={["/","/pokedex/Pokemon"]} component={Informacion}/>                    
                    <Route  path="*" component={() => <h1 style={{marginTop:200}}>404 <br/>Página no Encontrada</h1>}/>1
                </Switch>                
            </Router>
    );
}