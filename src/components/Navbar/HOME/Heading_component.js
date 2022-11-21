import React from "react";
import "./Heading_component.css";
export default function Heading_component(props) {
  return (
    <div>
      <div className="head1">
        <h2>{props.text}</h2>
        <hr className="hr_" />
      </div>
    </div>
  );
}
