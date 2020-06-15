import React from "react";
import RecepeList from "./components/RecepeList";

function App() {
  return <RecepeList recipes={sampleRecepes} />;
}

const sampleRecepes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken\n",
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "Put paprika on pork\n2. Put pork in oven\n3. Eat chicken\n",
  },
];
export default App;
