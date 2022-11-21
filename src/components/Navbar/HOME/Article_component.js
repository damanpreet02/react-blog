import React from "react";
import img5 from "./img5.jpg";
import "./Article_component.css";
export default function Article_component() {
  return (
    <div className="art">
      <div>
        <img src={img5} alt="Image5" />
      </div>
      <div className="art3">
        <h3>Catch waves with an adventure guide</h3>
        <p>
          Gujarat is vastly underrated and it’s a mystery to us why the region
          isn’t more well.
        </p>
      </div>
    </div>
  );
}
