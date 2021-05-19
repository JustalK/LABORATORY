import React, { useRef, useState, useEffect } from "react";

const ExperienceF = () => {
  const myFunction = useRef()
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const [countC, setCountC] = useState(0)

  useEffect(() => {
    myFunction.current = setInterval(() => {
      setCountA(c => c + 1)
    }, 1000)
    return () => {
      clearInterval(myFunction.current)
    }
  }, [countB])


  useEffect(() => {
    setInterval(() => {
      setCountC(c => c + 1)
    }, 1000)
  }, [countB])

  const changeState = () => {
    setCountB(c => c + 1)
  }

  return (
    <div>
      <button onClick={changeState}>
        Change Legacy State
      </button>
      <div>count A : {countA}</div>
      <div>count B : {countB}</div>
      <div>count C (with multicall problem) : {countC}</div>
      <div>Ref is used for referencing the function for the clearInterval, if you click the button multiple time, A should not move</div>
    </div>
  );
}

export default ExperienceF;
