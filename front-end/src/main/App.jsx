import React from 'react';
import {Rotas} from './router'
import '../assets/css/style.css'
import {Nav} from '../componentes/nav'

function App() {
    return (
        <div className='container'>
            <Nav />
            <Rotas />
        </div>
    );
}

export default App;
