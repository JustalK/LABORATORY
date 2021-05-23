import React, { useState } from "react";
import Children from "./Children"

/**
* This is one-way binding
* We are passing the data from ExperienceQ to Children to Grand Children by indicating everytime the props
**/
export default function ExperienceQ() {
  const [countA, setCountA] = useState(0)

  return (
    <div>
      <button onClick={() => setCountA(c => c + 1)}>
        Change count A
      </button>
      <Children countA={countA} />
    </div>
  );
}
