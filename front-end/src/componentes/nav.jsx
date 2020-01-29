import React, { Component } from 'react';
import logo from '../assets/img/logo.png'

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {btnmobile:'btn-mobile'}

    }

    Mobile = () =>{
        if (this.state.btnmobile == 'btn-mobile'){
            this.setState({btnmobile:'btn-mobile mudar'})
        }
        else{
            this.setState({btnmobile:'btn-mobile'})
        }
    }

    render(){
        return (
            <div>
                <nav>
                    <div className={this.state.btnmobile} onClick={this.Mobile}>
                            <div className="traco-um"></div>
                            <div className="traco-dois"></div>
                            <div className="traco-tres"></div>
                    </div>
                    <img src={logo} className='logo' alt=""/>
                    <button>yeah</button>

                </nav>
            </div>

        )

    }
}

export {Nav}