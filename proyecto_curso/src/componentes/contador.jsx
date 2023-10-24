import React, { Component } from "react";
import { Primary } from "../stories/NombreDelComponente"; // Reemplaza 'NombreDelComponente' con el nombre correcto del componente

class Mensaje extends Component {
  state = {
    letras: this.props.letras,
    contar: 0,
    mensaje: this.props.mensaje,
    show: "",
    divStyle: {
      width: "0%",
    },
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
    this.setState({
      divStyle: {
        width:
          (this.state.contar * 100) /
            (this.state.mensaje.length - 1 - this.state.letras) +
          "%",
      },
    });
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
      <div className="w-100 card shadow-lg">
        <div className="card-body">
          <h3> DESCIFRA EL MENSAJE OCULTO !!!</h3>
          <h3> {this.formatoContar()} </h3>
          <NombreDelComponente
            texto="Avanzar"
            valor="True"
            onClick={this.manejadorIncremento}
            color="#cb4c30"
          />
          <div className="progress my-5 w-100">
            <div
              className="progress-bar"
              style={this.state.divStyle}
              role="progressbar"
              aria-valuenow={this.state.contar}
              aria-valuemin="0"
              aria-valuemax={this.state.mensaje.length}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mensaje;
