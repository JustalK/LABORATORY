import React, { Profiler, createRef } from "react"
import Children from './Children'

const Experience = () => {
  const ref = createRef()

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

  return (
    <Profiler id="Incrementation" onRender={callback}>
      <div>
      <button onClick={() => ref.current(c => c + 1)}>Increment the children in the parent</button>
        <Children ref={ref} />
      </div>
    </Profiler>
  );
}

export default Experience;
