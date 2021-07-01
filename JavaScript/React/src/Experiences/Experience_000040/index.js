import React, { useState, Profiler } from "react";

const Experience = () => {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  const [test, setTest] = useState({val: 0, val2: 0});

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
  }

  // Tricky usage of the queue of Javascript (error double re-render)
  const doubleReRender = () => {
    setTimeout(singleReRender, 0);
  }

  const singleReRender = () => {
    setVal(c => c + 1);
    setVal2(c => c + 1);
  }

  // How to manage a single render on this scenario
  const testeReRender = () => {
    setTimeout(() => {
      setTest({val: test.val + 1, val2: test.val2 + 1});
    }, 0)
  }

  return (
    <Profiler id="Incrementation" onRender={callback}>
      <div>
        <button onClick={doubleReRender}>Double Re Render and look in the console</button>
        <button onClick={singleReRender}>Single Re Render and look in the console</button>
        <button onClick={testeReRender}>Single Re Render and look in the console</button>
        <span>Value: {val}</span>
        <span>Value2: {val2}</span>
        <span>Test Value: {test.val} | Test Value2: {test.val2}</span>
      </div>
    </Profiler>
  );
}

export default Experience;
