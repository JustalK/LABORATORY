import React, { useState, useEffect } from "react";

const ExperienceE = () => {
  const [countA, setCountA] = useState(0)

  /**
  * This useEffect will trigger constantly since count change at each render
  **/
  useEffect(() => {
    console.log('3')
    return () => {
      console.log('1')
    }
  }, [countA])


  useEffect(() => {
    console.log('4')
    return () => {
      console.log('2')
    }
  }, [countA])
  /**
  * Change the state of the component the same way as useState
  **/
  const changeState = () => {
    setCountA(c => c + 1)
  }

  return (
    <div>
      <button onClick={changeState}>
        Change Legacy State
      </button>
      <div>count A : {countA}</div>
      <div>Open the console for seeing the log</div>
    </div>
  );
}

export default ExperienceE;
