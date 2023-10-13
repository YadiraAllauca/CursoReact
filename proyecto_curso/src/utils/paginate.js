import _ from "lodash";
export function paginate(articulos, numeroPagina, tamanioPagina) {
  const startIndex = (numeroPagina - 1) * tamanioPagina;
  return _(articulos).slice(startIndex).take(tamanioPagina).value();
}
