import React from "react";
import "./NewPost.css";
import img7 from "./img7.jpg";
export default function RR(props) {
    return (
    <div className="post2">
      <img src={img7} alt="Image" />
      <h2>{props.text}</h2>
    </div>
  );
}
