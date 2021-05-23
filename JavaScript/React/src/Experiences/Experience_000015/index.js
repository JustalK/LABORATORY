import React, { useState } from "react";
import useCustom from "./useCustom"

export default function ExperienceO() {
  /**
  * This is using a random custom hook
  * It will only trigger at first render
  **/
  const active = useCustom(null)
  const [countA, setCountA] = useState(0)

  return (
    <div>
      <button onClick={() => setCountA(c => c + 1)}>
        Change count A
      </button>
      <div>countA: {countA}</div>
      {active ? 'ACTIVE' : 'NOT ACTIVE'}
    </div>
  );
}
