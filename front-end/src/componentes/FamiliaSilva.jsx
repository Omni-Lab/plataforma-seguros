import React, { Component } from 'react';
class FamiliaSilva extends Component{
    constructor (props){
        super(props);
        this.state = {tipo: '', showComponent: false, args:this.props.location.state.args};

    }

    
    gerarPessoas = () =>{
        let lista = []
        for (let i of JSON.parse(this.state.tipo)){
            lista.push('Seu nome é '+i.nome+' e seu id é '+i.id)
        }
        let pessoas = lista.map((lista) => {
            return <li>{lista}</li>
        })
        return pessoas
    }

    componentDidMount(){
        const url = '/api/pessoa'
        fetch(url,{
          method: "GET",
        })
        .then(res => res.json())
        .then((data) => {
            const dataSet = JSON.stringify(data)
            this.setState({tipo: dataSet})
            this.setState({showComponent: true,})
            
        }).catch(console.log)
    }

    

    render (){
        return(
            <div>
                {this.state.args}
                {this.state.showComponent ? this.gerarPessoas() : null}
            </div>
            ) 

    }
}

export { FamiliaSilva }