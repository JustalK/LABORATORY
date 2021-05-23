import React, { useState } from "react";

export default function ExperienceO() {
  /**
  * Accept multiple arg in useState but it's useless
  * 1337 will be ignored
  **/
  const [countA, setCountA] = useState(0, 1337)

  return (
    <div>
      <button onClick={() => setCountA(c => c + 1)}>
        Change count A
      </button>
      <div>countA: {countA}</div>
      <div>setCountA: {countA[1]}</div>
    </div>
  );
}
