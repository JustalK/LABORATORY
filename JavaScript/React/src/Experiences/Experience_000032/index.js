import React, { Profiler, useState, useRef } from "react"

const Experience = () => {
  const [val, setVal] = useState(0)
  const ref = useRef(0)

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

  return (
    <Profiler id="Test" onRender={callback}>
      <div>
        <span>
          When you are using a useState incrementation, a re-render is called at each click while when you are using a useRef incrementation, the calcul will be done but no re-render will be made. It can be usefull when you just need the value in a setTimeout for example.
        </span>
        <button onClick={() => setVal(c => c + 1)}>Increment the useState and look console</button>
        <span>{val}</span>
        <button onClick={() => ref.current += 1}>Increment the useRef and look console</button>
        <span>{ref.current}</span>
      </div>
    </Profiler>
  );
}

export default Experience;
