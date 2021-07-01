import React, { useState, useEffect, Profiler } from "react";

const Experience = ({ test = 1}) => {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

  // Triple update for nothing -- see experience 000042 for solution
  useEffect(() => {
    setVal(test)
    setVal2(val + 1)
  }, [test, val])

  return (
    <Profiler id="Incrementation" onRender={callback}>
      <div>
        <span>Open the console</span>
        <span>Value: {val}</span>
        <span>Value2: {val2}</span>
      </div>
    </Profiler>
  );
}

export default Experience;
