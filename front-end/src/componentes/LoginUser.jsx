import React, { Component } from 'react'
import {Get} from '../utils/get'
import { Redirect } from 'react-router-dom'


class LoginUser extends Component{
    constructor(props){
        super(props)
        this.state = {usuario:'', senha:'', contexto:'', redirect: false}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderRedirect = () =>{
        if (this.state.redirect) {
            return <Redirect to='/admin' />
        }
    }

    async getUsuario() {
        const resposta = await Get('/api/pessoa');
        this.setState({contexto: resposta});
        this.setState({redirect: true});
    }
    

    handleUsuarioChange = (event) => {
        this.setState({usuario:event.target.value})
    }

    handleSenhaChange = (event) => {
        this.setState({senha:event.target.value})
    }

    handleSubmit(event) {
        alert(`User: ${this.state.usuario} Senha: ${this.state.senha}`);
        this.getUsuario()
        event.preventDefault();
    }

    


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Nome:
                      <input type="text" value={this.state.usuario} onChange={this.handleUsuarioChange} />
                    </label>
                    <label>
                        Senha:
                        <input type="password" value={this.state.senha} onChange={this.handleSenhaChange}/>
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
                {this.state.redirect ? <Redirect to={{
                    pathname: '/pessoas',
                    state: { args: this.state.usuario}
                }} /> : null}
            </div>
        )
    }
    
}

export {LoginUser}