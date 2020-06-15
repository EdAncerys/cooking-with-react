import React from "react";
import Recepe from "./Recepe";

export default function RecepeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => {
        return <Recepe key={recipe.id} {...recipe} />;
      })}
    </div>
  );
}
