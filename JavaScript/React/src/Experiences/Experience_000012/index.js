import React, { useState, createRef, useEffect, useLayoutEffect } from "react";

/**
* ComponentWillMount does not exist anymore, so there is no way except writing directly in the conpoennt for immitating the result
**/
const ExperienceJ = () => {
  const [index, setIndex] = useState(1);
  const refCreateRefA = createRef();
  const refCreateRefB = createRef();
  const refCreateRefC = createRef();

  /**
  * It will work because we are affecting the value before the render
  **/
  refCreateRefB.current = 'B'

  /**
  * It wont work because we are affecting after the dom has been mutated and after the render
  **/
  useEffect(() => {
    refCreateRefA.current = 'A'
  }, [index, refCreateRefA])


  useLayoutEffect(() => {
    refCreateRefC.current = 'C'
  }, [index, refCreateRefC])

  return (
    <div>
      <button onClick={() => setIndex(i => i + 1)}>
        Increase index
      </button>
      <div>createRefA (inside useEffect): {refCreateRefA.current}</div>
      <div>createRefC (inside useLayoutEffect): {refCreateRefC.current}</div>
      <div>createRefB (inside the code): {refCreateRefB.current}</div>
    </div>
  );
}

export default ExperienceJ;
