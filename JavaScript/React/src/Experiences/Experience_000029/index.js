import React, { Profiler, useState, useRef } from "react"

/**
* For more information : https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
**/
const Experience = () => {
  const [valControlled, setValControlled] = useState(0)
  const valUncontrolled = useRef();

  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
    console.log('Controlled : ' + valControlled)
    console.log('Uncontrolled : ' + valUncontrolled.current.value)
  }

  const onChange = (e) => {
    setValControlled(e.target.value)
  }

  return (
    <Profiler id="Controlled" onRender={callback}>
      <div>
        <span>If you pay attention to the console, the uncontrolled input will not trigger a new update while the controlled input will. A controlled component is usefull when you need control over the value but if it's not needed it's better to use an uncontrolled component.</span><br /><br />
        <span>A controlled input</span><br />
        <input type="text" onChange={onChange} /><br />
        <span>An uncontrolled input</span><br />
        <input type="text" ref={valUncontrolled} />
      </div>
    </Profiler>
  );
}

export default Experience;
