import React from "react";
import "./NewPost.css";
import img12 from "./img12.jpg";
export default function Buggati(props) {
    return (
    <div className="post2">
      <img src={img12} alt="Image" />
      <h2>{props.text}</h2>
    </div>
  );
}
