/*
//Creación de objetos, funciones y arreglos
const persona = {
  nombre: "Yadi",
  caminar: function () {},
  hablar() {},
};

persona.hablar();
persona['nombre'] = "Carolina";

const nombreobjetivo = "nombre";
persona[nombreobjetivo.value] = "Raquel"; 

var log = function(mensaje){
  console.log(mensaje);
}

var log2 = mensaje => {
  console.log(mensaje)
}

const mensajes = [
  "Pueden ser insertados en arreglos",
  log,
  log("hola"),
  log2
];

const dentroFn = ingreso => {
  ingreso("Pueden ser enviados como argumentos a otras funciones")
}


log("Hola")
log2("Hola2")

mensajes[1](mensajes[0]);
mensajes[3](mensajes[2]);

dentroFn(mensaje => console.log(mensaje));*/

const crearMayus = function (registro) {
  return function (mensaje) {
    registro(mensaje.toUpperCase()+"!!!");
  }
}

const enfasis = crearMayus(mensaje => console.log(mensaje));

enfasis("La vida es mejor con música")
enfasis("Me siento bien ahora")
