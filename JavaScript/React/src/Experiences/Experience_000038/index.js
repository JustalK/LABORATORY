import React, { useState, Profiler } from "react";

const Experience = () => {
  const array = Array.from({length: 20000})
  const [val, setVal] = useState(0);

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

  return (
    <Profiler id="Incrementation" onRender={callback}>
      <div>
        <button onClick={() => setVal(c => c + 1)}>Increment and look in the console</button>
        Value: {val}
        {array.map((_, index) => {
          return (<span key={index}>TEST</span>)
        })}
      </div>
    </Profiler>
  );
}

export default Experience;
