import React, { Component } from 'react';

import './styles/Ejercicio1.css';

function Lista(props) {
    const datos = props.datos;
    const listItems = datos.map((dato) =>
        <li className="item">{dato}</li>
    );
    return (
        <ul className="contenedorUl">{listItems}</ul>
    );
}

function Primo(numero) {

    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    return numero !== 1;
}

export default class Ejercicio1 extends Component {

    state = {
        datos: []
    }

    componentDidMount() {
        this.numerosPrimos()
    }


    numerosPrimos = () => {
        let lista = []
        for (let i = 0; i <= 25; i++) {
            let primo = Primo(i)
            if (primo) {
                lista.push(i)
            }
        }
        this.setState({ datos: lista })
    }

    render() {
        return (
            <div className="container">
                <h1 className="h1">TASK 1</h1>
                <p className="descripcion">Un programa que imprima los primeros 10 números primos (numero primo es el que es divisible únicamente sobre si mismo y 1). .</p>
                <Lista datos={this.state.datos} />
            </div>
        )
    }
}