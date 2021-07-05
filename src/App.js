import "./styles.css";
import React from "react";
import Food from "./food";
import Card from "./card";

export default function App() {
  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      {Food.map(function (food) {
        return <Card key={food.key} img={food.img} />;
      })}
    </div>
  );
}
