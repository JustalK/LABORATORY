import React, { useState, useEffect } from "react";

/**
* Using multiple useEffect trigger on re-render depending on condition
**/
const ExperienceB = () => {
  const [dataA, setDataA] = useState(false)
  const [dataB, setDataB] = useState(false)
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  /**
  * This useEffect will only trigger on re-render on the click on A
  **/
  useEffect(() => {
    setCountA(c => c + 1)
  }, [dataA])

  /**
  * This useEffect will only trigger on re-render on the click on B
  **/
  useEffect(() => {
    setCountB(c => c + 1)
  }, [dataB])

  return (
    <div>
      <button onClick={() => setDataA(!dataA)}>
        Change Date A to C
      </button>
      <button onClick={() => setDataB(!dataB)}>
        Change Data B to C
      </button>
      <div>data A : {dataA ? 'True' : 'False'}</div>
      <div>data B : {dataB ? 'True' : 'False'}</div>
      <div>count A : {countA}</div>
      <div>count B : {countB}</div>
    </div>
  );
}

export default ExperienceB;
