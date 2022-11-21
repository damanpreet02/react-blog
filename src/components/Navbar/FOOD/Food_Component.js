import React from "react";
import burger1 from "./b1.webp";
import pizza from "./pizza2.jpeg";
import w5 from "./w5.jpeg";
import "./Food_component.css";
import p1 from "./p1.jpg";
import f1 from "./f1.jpeg";
import d1 from "./d1.jpeg";
import s1 from "./s1.jpeg";
export default function Food_component() {
  return (
    
    <div className="geeks2">
      <div className="geeks">
        <img src={burger1} alt="Image6" />
        <h2>Burger</h2>
      </div>
      <div className="geeks">
        <img src={pizza} alt="Image6" />
        <h2>Pizza</h2>
      </div>
      <div className="geeks">
        <img src={w5} alt="Image6" />
        <h2>Wrap</h2>
      </div>

      <div className="geeks">
        <img src={p1} alt="Image6" />
        <h2>Pasta</h2>
      </div> 

       <div className="geeks">
        <img src={d1} alt="Image6" />
        <h2>Dosa</h2>
      </div>

      <div className="geeks">
        <img src={f1} alt="Image6" />
        <h2>French-Fries</h2>
      </div>

      <div className="geeks">
        <img src={s1} alt="Image6" />
        <h2>Samosa</h2>
      </div>
    </div>
  );
}
