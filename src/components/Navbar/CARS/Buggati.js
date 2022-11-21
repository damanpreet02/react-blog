import React from "react";
import "./NewPost.css";
import img10 from "./img10.jpg";
export default function Buggati(props) {
    return (
    <div className="post2">
      <img src={img10} alt="Image" />
      <h2>{props.text}</h2>
    </div>
  );
}
