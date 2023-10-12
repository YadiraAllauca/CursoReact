import React, { Component } from "react";

class Contador extends Component {
  state = {
    value: this.props.value,
  };

  manejadorIncremento = () => {
    this.setState({ value: this.state.value + 1 });
  };

  formatoContar() {
    const { value } = this.state;
    return value === 0 ? "Cero" : value;
  }

  cambiarClase() {
    let clases = "badge m-2 badge-";
    clases += this.state.value === 0 ? "light" : "primary";
    return clases;
  }

  render() {
    return (
      <div>
        <span className={this.cambiarClase()}>{this.formatoContar()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.manejadorIncremento}
        >
          Incremento
        </button>
      </div>
    );
  }
}

export default Contador;
