import React, { Component } from "react";
/*
class Contador extends Component {

  render() {
    return(<h1>Hola!</h1>)
  }
}
export default Contador
import React from "react";

function Contador() {

    return (<h1>Hola!!</h1>);

}
export default Contador;*/

class Contador extends Component {
  state = {
    count: 0
  };

  manejadorIncremento = () => {
    this.setState({count:this.state.count + 1})
  }

  formatoContar() {
    const { count } = this.state;
    return count === 0 ? "Cero" : count;
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