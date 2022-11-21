import React from "react";
import img4 from "./img4.jpg";
import "./l_grid.css";
export default function L_grid() {
  return (
    <div>
      <div className="l_grid_row_1">
        {/*3 COMPONENTS*/}
        <img src={img4} className="img4" alt="Image4" />
        <h3>Joshua Tree Overnight Adventure</h3>
        <p>
          Gujarat is vastly underrated and it’s a mystery to us why the region
          isn’t more well-known as a tourist destination. It has a plethora of
          temples and palaces
        </p>
      </div>
    </div>
  );
}
