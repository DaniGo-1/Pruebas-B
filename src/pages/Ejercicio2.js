import React, { Component } from 'react';

import './styles/Ejercicio2.css';

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}


export default class Ejercicio2 extends Component {

  
    constructor(props) {
        super(props);
        this.state = { value: '',  palindromo: ''};

        this.handleChange = this.handleChange.bind(this);
    }


    validar = (palabra) => {
        console.log(palabra, '------------------------------')
        if (palabra == reverseString(palabra)) {
            this.setState({ palindromo: 'true' })
        } else {
            this.setState({ palindromo: 'false' })

        }
    }
    handleChange(event) {
        console.log(event.target.value, '****************')
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <h1 className="h1">TASK 2</h1>
                <p className="descripcion">Un programa que indique si la cadena ingresada es un palíndromo (un palíndromo es una palabra, número o frase que se lee igual hacia adelante que hacia atrás, por ejemplo: RECONOCER). El programa debe recibe la palabra como parámetro.</p>

                <div className="row">
                    <label>
                        Palabra:
                    <input type="text" onChange={this.handleChange} />
                    </label>
                    <h2>Palíndromo: {this.state.palindromo}</h2>
                </div>
                <button className="button1" onClick={() => this.validar(this.state.value)}>Validar</button>
            </div>
        )
    }
}