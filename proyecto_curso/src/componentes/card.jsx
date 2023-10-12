import React from "react";
import imagen1 from "../assets/descarga.png";
import imagen2 from "../assets/images (1).jpg";
import imagen3 from "../assets/images.jpg";

function Card() {
  return (
    <div className="card">
      <img src={imagen1} alt="" />
      <div className="card-body text-center">
        <h4 className="card-title">Título</h4>
        <p className="card-text text-justify text-secondary">lorem ipsum dolor sit amet, consectetur adipis</p>
      </div>
    </div>
  )
}
export default Card;