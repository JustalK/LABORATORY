import React, { useRef, useEffect, useState } from "react";
import Children from './Children'

const Experience = () => {
  const ref = useRef()
  const [val, setVal] = useState('')

  useEffect(() => {
    setVal(ref.current.innerHTML)
  }, [])

  return (
    <div>
      <Children ref={ref} />
      <span>Value of children inside parent : {val}</span>
    </div>
  );
}

export default Experience;
