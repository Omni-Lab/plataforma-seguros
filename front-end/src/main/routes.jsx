import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import {Principal} from '../template/principal'
import About from '../about/about'
import {FamiliaSilva} from '../componentes/FamiliaSilva'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Principal} />
        <Route path='/about' component={About} />
        <Route path='/pessoas' component={FamiliaSilva} />
        <Redirect from='*' to='/' />
    </Router>
)