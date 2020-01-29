import React from 'react';
import {BrowserRouter as Router, Route, Redirect, HashRouter} from 'react-router-dom'
import {FamiliaSilva} from '../componentes/FamiliaSilva'
import {LoginUser} from '../componentes/LoginUser'
import {Principal} from '../templates/principal'


const Rotas = (props) => (
    <div>
        <Router history={HashRouter}>
            
            <Route path="/pessoas" render={(props) => <FamiliaSilva {...props}/>}/>
            <Route exact path='/login'>
                <LoginUser value='Componente Login' />
            </Route>
            <Route path="/" render={(props) => <Principal {...props}/>}/>
        </Router>
    </div>
)

export {Rotas}