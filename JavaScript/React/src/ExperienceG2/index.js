import React, { useState, useLayoutEffect } from "react";

const ExperienceH = () => {
  const [countA, setCountA] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')

  /**
  * In this version, there is no flicker effect since we set countA on DOM mutation and not the render
  * This technique should be use, only for mesuring DOM element and when two reload happen in a short amout of time
  **/
  useLayoutEffect(() => {
    if (countA === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') {
      setCountA(Math.random() * 100)
    }
  }, [countA])

  return (
    <div>
      <button onClick={() => setCountA('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')}>
        Change State
      </button>
      <div>Count : {countA.toString()}</div>
      <div>This example trigger the change state before the render using useLayoutEffect</div>
    </div>
  );
}

export default ExperienceH;
