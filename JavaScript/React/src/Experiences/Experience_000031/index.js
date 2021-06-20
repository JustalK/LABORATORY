import React, { useRef, useEffect, useState } from "react";
import Children from './Children'

const Experience = () => {
  const ref = useRef()
  const [firstVal, setFirstVal] = useState('')
  const [secondVal, setSecondVal] = useState('')

  useEffect(() => {
    setFirstVal(ref.current.first().innerHTML)
    setSecondVal(ref.current.second().innerHTML)
  }, [])

  return (
    <div>
      <Children ref={ref} />
      <span>First value of children inside parent : {firstVal}</span>
      <span>Second value of children inside parent : {secondVal}</span>
    </div>
  );
}

export default Experience;
