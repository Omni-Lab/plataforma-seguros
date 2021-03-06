import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../assets/css/style.css'

import React from 'react'
import Routes from './routes'
import {Nav} from '../componentes/nav'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Nav />
        <Routes />
    </div>
)