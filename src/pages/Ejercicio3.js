import React, { Component } from 'react';

import './styles/Ejercicio3.css';


export default class Ejercicio1 extends Component {

    constructor(props) {
        super(props);
        this.state = { form: [], nuevo: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, event) {
        this.setState({
            form: {
                [name] : event.target.value
            }
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        console.log(event, '------------ FORM -----------')
    }

    nuevo() {
        this.setState({ nuevo: !this.state.nuevo })
    }


    crear() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={this.state.value} onChange={(text) => this.handleChange('nombre', text)} />
                </label>
                <br></br>
                <label>
                    Número de NIT:
                    <input type="text" value={this.state.value} onChange={(text) => this.handleChange('numero', text)} />
                </label>
                <br></br>

                <label>
                    Fecha de fundación:
                    <input type="text" value={this.state.value} onChange={(text) => this.handleChange('fecha', text)} />
                </label>
                <br></br>

                <label>
                    Dirección:
                    <input type="text" value={this.state.value} onChange={(text) => this.handleChange('direccion', text)} />
                </label>
                <br></br>

                <input type="submit" className="button" value="Crear" onClick={() => this.nuevo()} />
            </form>
        )
    }



    render() {
        return (
            <div className="container">
                <h1 className="h1">TASK 3</h1>
                <p className="descripcion">Desarrolle una página web con un formulario para implementar un CRUD de una entidad “empresa”, la cual tiene los siguientes atributos: Id, nombre, número de NIT, fecha de fundación y dirección.  Utilice un medio ‘web storage’ para almacenar los datos. </p>
                <table id="customers">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Número de NIT</th>
                        <th>Fecha de fundación</th>
                        <th>Dirección</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maria Anders</td>
                        <td>1861813</td>
                        <td>04/04/2020</td>
                        <td>Zona 15</td>
                    </tr>
                </table>
                <br></br>
                {!this.state.nuevo &&
                    <input type="button" className="button" value="Nuevo" onClick={() => this.nuevo()}></input>
                }
                {/* <input type="button" class="button" value="Ver"></input>
                <input type="button" class="button" value="Actualizar"></input>
                <input type="button" class="button" value="Eliminar"></input> */}

                {this.state.nuevo &&
                    this.crear()
                }

            </div>
        )
    }
}