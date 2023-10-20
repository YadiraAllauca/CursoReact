import React from "react";
import Mensaje from "../src/components/contador";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

function index() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link href="/index">
          <button className="mx-auto btn btn-outline-success" type="button">
            Inicio
          </button>
        </Link>
        <Link href="/About">
          <button className="mx-auto btn btn-outline-secondary" type="button">
            Acerca de
          </button>
        </Link>
      </nav>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Mensaje letras={5} mensaje="Implementando componentes y ruteo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
