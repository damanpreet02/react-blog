import React from "react";
import "./NewPost.css";
import img13 from "./img13.jpg";
export default function Buggati(props) {
    return (
    <div className="post2">
      <img src={img13} alt="Image" />
      <h2>{props.text}</h2>
    </div>
  );
}
