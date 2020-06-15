import React from "react";

export default function Recepe() {
  return (
    <div>
      <div>
        <h3>Plain Chicken</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time</span>
        <span>1:45</span>
      </div>
      <div>
        <span>Servings</span>
        <span>3</span>
      </div>
      <div>
        <span>Instructions</span>
        <div>
          <p>Put salt on chicken</p>
          <p>Put chicken in oven</p>
          <p>Eat chicken</p>
        </div>
      </div>
    </div>
  );
}
