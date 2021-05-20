import React, { useState, useRef, createRef } from "react";

const ExperienceJ = () => {
  const [index, setIndex] = useState(1);
  const refUseRef = useRef();
  const refCreateRef = createRef();

  /**
  * We do not create new ref when using useRef, so the value will stay the same
  **/
  refUseRef.current = !refUseRef.current ? index : refUseRef.current;
  /**
  * At each render, we create a new ref, so the current value will be undefined everytime
  **/
  refCreateRef.current = !refCreateRef.current ? index : refCreateRef.current;

  return (
    <div>
      <button onClick={() => setIndex(i => i + 1)}>
        Increase index
      </button>
      <div>useRef : {refUseRef.current}</div>
      <div>createRef : {refCreateRef.current}</div>
    </div>
  );
}

export default ExperienceJ;
