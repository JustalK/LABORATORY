import React, { useState, useEffect } from "react";

const ExperienceD = () => {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  /**
  * This useEffect will trigger constantly since count change at each render
  **/
  useEffect(() => {
    setCountA(c => c + 1)
    setCountB(c => c + 1)
    return () => {
      setCountA(c => c - 1)
    }
  }, [countB])

  return (
    <div>
      <div>count A : {countA}</div>
      <div>count B : {countB}</div>
    </div>
  );
}

export default ExperienceD;
