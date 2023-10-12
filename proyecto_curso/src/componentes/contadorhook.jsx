import React, { useState } from 'react';

function Contador() {
  const [valor, setContador] = useState(0)
  
  function manejadorClicBoton() {
    setContador (valor+1)
  }

  return (
    <div>
      <h1>Contador incrementa {valor} veces</h1>
      <button onClick={manejadorClicBoton}>Incremento</button>
    </div>
  )
}
export default Contador