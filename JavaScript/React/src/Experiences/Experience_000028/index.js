import React, { Profiler, useState } from "react"
import Children from './Children'

const Experience = () => {
  const [val, setVal] = useState(0)

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

  return (
    <Profiler id="Incrementation" onRender={callback}>
      <div>
      <button onClick={() => setVal(c => c + 1)}>Increment and look console</button>
        <Children val={val} />
      </div>
    </Profiler>
  );
}

export default Experience;
