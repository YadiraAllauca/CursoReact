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
  render() {
    return (<div>
      <span>{ this.state.count}</span>
      <button>Incremento</button>
    </div>);
  }
}
export default Contador;