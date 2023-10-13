// servicioFalsoPelicula.js

const peliculas = [
  {
    title: "Película 1",
    genre: { name: "Género 1" },
    numberInStock: 10,
    dailyRentalRate: 2.5,
  },
  {
    title: "Película 2",
    genre: { name: "Género 2" },
    numberInStock: 5,
    dailyRentalRate: 3.0,
  },
  
];

export function getPeliculas() {
  return peliculas;
}
