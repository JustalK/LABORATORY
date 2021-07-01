import React, { useState, Profiler } from "react";

const Experience = ({ test = 1}) => {
  const [val] = useState(test);
  const [val2] = useState(() => {
    return val + 1
  });

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

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
