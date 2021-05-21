import React, { useState } from "react";
import Children from "./Children"
import { Count } from "./Count"

/**
* This is how to pass data using the context
* We are passing the data from ExperienceQ to GrandChildren without passing throught Children
**/
export default function ExperienceR() {
  const [countA, setCountA] = useState(0)

  return (
    <Count.Provider value={countA}>
      <div>
        <button onClick={() => setCountA(c => c + 1)}>
          Change count A
        </button>
        <Children />
      </div>
    </Count.Provider>
  );
}
