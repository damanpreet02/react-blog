import React from "react";
import "./NewPost.css";
import img11 from "./img11.jpg";
export default function Lykan(props) {
    return (
    <div className="post2">
      <img src={img11} alt="Image" />
      <h2>{props.text}</h2>
    </div>
  );
}
