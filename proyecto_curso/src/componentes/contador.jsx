import React, { Component } from "react";

class Contador extends Component {
  state = {
    value: this.props.value
  };

  manejadorIncremento = () => {
    this.setState({value: this.state.value + 1});
  }

  formatoContar() {
    const { value } = this.state;
    return value === 0 ? "Cero" : value;
  }

  render() {
    return (<div>
      <span>{ this.formatoContar()}</span>
      <button onClick={this.manejadorIncremento}
      >Incremento</button>
    </div>);
  }
}
export default Contador;