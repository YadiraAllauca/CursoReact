import React from "react";
import _ from "lodash"

const Paginacion = (props) => {
  const { conteoItems, tamanioPaginas, enCambioPagina, paginaActual } = props;
  const conteoPagina = Math.ceil(conteoItems / tamanioPaginas)
  if (conteoPagina === 1) return null;

  const pages = _.range(1,conteoPagina+1)

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === paginaActual ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => enCambioPagina(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Paginacion