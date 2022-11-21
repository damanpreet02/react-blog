import React from "react";
import "./CARS/Cars.css";
import Lambo from "./CARS/Lambo";
import RR from "./CARS/RR";
import Buggati from "./CARS/Buggati";
import Lykan from "./CARS/Lykan";
import Audi from "./CARS/Audi";
import BMW from "./CARS/BMW";
export default function Cars() {
  return (
    <div className="cars">
      <RR text={"Venue"} />
      <Lambo text={"Urban Crusier"} />
      <Buggati text={"Nexon"} />
      <Lykan text={"Altroz"} />
      <Audi text={"Glanza"} />
      <BMW text={"Verna"} />
    </div>
  );
}
