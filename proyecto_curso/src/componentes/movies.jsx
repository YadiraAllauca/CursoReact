import React, { Component } from "react";
import { getPeliculas } from "../services/servicioFalsoPelicula.js";

class Movie extends Component {
  state = {
    peliculas: getPeliculas(),
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Disponibilidad</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {this.state.peliculas.map((pelicula) => (
            <tr key={pelicula.title}>
              {" "}
              {}
              <td>{pelicula.title}</td>
              <td>{pelicula.genre.name}</td>
              <td>{pelicula.numberInStock}</td>
              <td>{pelicula.dailyRentalRate}</td> {}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movie;
