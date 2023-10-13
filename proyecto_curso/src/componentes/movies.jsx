import React, { Component } from "react";
import { getPeliculas } from "../services/servicioFalsoPelicula.js";
import Paginacion from "./paginacion.jsx";
import { paginate } from "../utils/paginate.js";

class Movie extends Component {
  state = {
    peliculas: getPeliculas(),
    tamanioPagina: 4,
    paginaActual: 1,
  };
  handleCambioPagina = (page) => {
    this.setState({ paginaActual: page });
    console.log(page);
  };

  render() {
    const { lenght: contar } = this.state.peliculas;
    if (contar === 0) return <p>No existe registro</p>;
    const peliculasPaginadas = paginate(
      this.state.peliculas,
      this.state.paginaActual,
      this.state.tamanioPagina
    );

    return (
      <React.Fragment>
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
            {peliculasPaginadas.map((pelicula) => (
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
        <Paginacion
          conteoItems={contar}
          tamanioPagina={this.state.tamanioPagina}
          enCambioPagina={this.handleCambioPagina}
          paginaActual={this.state.paginaActual}
        ></Paginacion>
      </React.Fragment>
    );
  }
}

export default Movie;
