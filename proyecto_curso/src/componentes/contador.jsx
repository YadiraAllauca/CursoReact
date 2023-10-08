import React, { Component } from "react";

class Mensaje extends Component {
  state = {
    letras: 15,
    contar: 0,
    mensaje: "---Estoy programando en capacitateparaelempleo.org---",
    show: "",
  };

  concatenar = () => {
    var concat = "";
    for (var i = 0; i < this.state.letras; i++) {
      concat += this.state.mensaje[this.state.contar + i];
    }
    return concat;
  };

  manejadorIncremento = () => {
    this.setState({ show: this.concatenar() });
    this.setState({ contar: this.state.contar + 1 });
    if (
      this.state.contar + this.state.letras ===
      this.state.mensaje.length - 1
    ) {
      this.setState({ contar: 0 });
    }
  };

  formatoContar() {
    const { show } = this.state;
    return show === "" ? "Iniciar" : show;
  }

  render() {
    return (
      <div>
        <h1> DESCIFRA EL MENSAJE OCULTO !!!</h1>
        <h1> {this.formatoContar()} </h1>
        <button onClick={this.manejadorIncremento}> Avanzar </button>
      </div>
    );
  }
}

export default Mensaje;
