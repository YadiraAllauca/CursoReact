import React from "react";

const listGroup = (props) => {
  const { articulos } = props;

  return (
    <ul className="list-group">
      {articulos.map((articulo) => (
        <li key={articulo._id} className="list-group-item">
          {articulo.name}
        </li>
      ))}
    </ul>
  );
};

export default listGroup;
