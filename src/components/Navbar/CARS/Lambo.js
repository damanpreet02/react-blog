import React from "react";
import "./NewPost.css";
import img8 from "./img8.jpg";
export default function Lambo(props) {
    return (
    <div className="post2">
      <img src={img8} alt="Image" />
      <h2>{props.text}</h2>
    </div>
  );
}
