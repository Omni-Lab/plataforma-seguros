import React, { Component } from 'react';
import axios from 'axios'
class FamiliaSilva extends Component{
    constructor (props){
        super(props);
        this.state = {tipo: [], showComponent: false};
        this.gerarPessoas = this.gerarPessoas.bind(this);

    }

    
    gerarPessoas(){
        let lista = []
        for (let i of this.state.tipo){
            lista.push('Seu nome é '+i.nome+' e seu id é ')
        }
        let pessoas = lista.map((lista) => {
            return <p>{lista}</p>
        })
        return pessoas
    }

    componentDidMount(){
        axios.get(`api/pessoa`)
            .then(resp => {this.setState({...this.state, tipo: resp.data, showComponent: true});console.log(this.state)})
    }

    
    render (){
        return(
            <div>
                <h1>aaaaaaaaaaa</h1>
                {/* {this.state. args:this.props.location.state.args} */}
                {this.state.showComponent ? this.gerarPessoas() : null}
            </div>
            ) 

    }
}

export { FamiliaSilva }