import React, { useState, useEffect } from "react";

const ExperienceI = () => {
  const [countA, setCountA] = useState(0)

  /**
  * In this stupid scenario
  * The initalizator should only be run in the first render
  * But mixed with the useEffect play on each render, the useState is ignored and the initalizator is run again
  **/
  const [countB, setCountB] = useState(useEffect(() => {
    setCountA(countA + 1)
    return () => {
      setCountA(2)
    }
  }, [countA]))

  /**
  * If the useEffect is only be play on the first render, even after modifying the value of C, nothing happen
  **/
  const [countC, setCountC] = useState(useEffect(() => {
    setCountC(c => c ? c + 1 : 1)
    return () => {
      setCountC(2)
    }
  }, []))

  /**
  * If the useEffect is supposed to run again after change on countC, this is ignored
  **/
  const [countD, setCountD] = useState(useEffect(() => {
    setCountD(c => c ? c + 1 : 1)
    return () => {
      setCountD(2)
    }
  }, [countC]))

  return (
    <div>
      <button onClick={() => setCountA(0)}>
      Add 1 to A
      </button>
      <button onClick={() => setCountB(0)}>
      Add 1 to B
      </button>
      <button onClick={() => setCountC(c => c + 1)}>
        Add 1 to C
      </button>
      <div>count A : {countA}</div>
      <div>count B : {countB}</div>
      <div>count C : {countC}</div>
      <div>count D (change on C change) : {countD}</div>
      <div>This example play with the useState initalizator and the useEffect. Even if the useState is suppose to be read only on the first state, you can bypass that with the useEffect.</div>
    </div>
  );
}

export default ExperienceI;
