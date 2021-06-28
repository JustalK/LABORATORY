import React, { useState, Profiler } from "react";

// Compare to the experience 38, I build the map outside of the components
// The result is way faster when we click on the button
// Try to click multiple time on both experience (this one is way more reactive)
const array = Array.from({length: 20000})
const result = array.map((_, index) => {
  return (<span key={index}>TEST</span>)
})

const Experience = () => {
  const [val, setVal] = useState(0);

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

  return (
    <Profiler id="Incrementation" onRender={callback}>
      <div>
        <button onClick={() => setVal(c => c + 1)}>Increment and look in the console</button>
        Value: {val}
        {result}
      </div>
    </Profiler>
  );
}

export default Experience;
