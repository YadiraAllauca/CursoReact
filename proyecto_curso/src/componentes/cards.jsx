import React from "react";
import Card from "./card";

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className="col-md-4">
          <Card></Card>
        </div>
        <div className="col-md-4">
          <Card></Card>
        </div>
        <div className="col-md-4">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
export default Cards;