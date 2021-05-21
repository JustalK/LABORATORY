import React from "react";
import Children from "./Children"
import { Count } from "./Count"

/**
* This is how to pass data using the context
* We are passing the data from ExperienceQ to GrandChildren without passing throught Children
**/
export default function ExperienceQ() {
  return (
    <Count.Provider value={1}>
      <div>
        <Children />
      </div>
    </Count.Provider>
  );
}
