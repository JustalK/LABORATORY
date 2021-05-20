import React, { useState } from "react";

/**
* Playing with the useState for nesting the function
**/
const ExperienceL = () => {
  /**
  * This one will only show 1
  **/
  const table = [1, () => {
    return 2
  }]
  /**
  * This one will show 12
  **/
  const tableNumber = [1, 2]
  /**
  * This one will show 1 on first call but not on re-render
  **/
  const [countA, setCountA] = useState(useState(1))
  /**
  * This one will show 1 on first call but not on re-render
  **/
  const [countB, setCountB] = useState(useState(useState(1)))
  /**
  * But you cannot put a hook inside a callback
  * const [countC, setCountC] = useState(() => {
  *    useState(1)
  * })
  **/

  return (
    <div>
      <button onClick={() => setCountA(c => c + 1)}>
        Change count A
      </button>
      <button onClick={() => setCountA(c => c[0] + 1)}>
        Change count A alternative
      </button>
      <button onClick={() => setCountA(c => c[0] ? c[0] + 1 : c + 1)}>
        Change count A alternative 2
      </button><br />
      <button onClick={() => setCountB(c => c + 1)}>
        Change count B
      </button>
      <button onClick={() => setCountB(c => c[0] + 1)}>
        Change count B alternative
      </button>
      <button onClick={() => setCountB(c => c[0] && c[0][0] ? c[0][0] + 1 : c + 1)}>
        Change count B alternative
      </button>
      <div>countA: {countA}</div>
      <div>countA: {countA}</div>
      <div>countB: {countB}</div>
      <div>table: {table}</div>
      <div>tableNumber: {tableNumber}</div>
    </div>
  );
}

export default ExperienceL;
