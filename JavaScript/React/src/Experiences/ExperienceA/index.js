import React, { useReducer } from "react";

const ExperienceA = () => {
  /**
  * Creating a custom legacy setState in a functional component
  **/
  const useLegacyState = initialState => useReducer(
    (state, update) => ({ ...state, ...update }),
    initialState
  )

  /**
  * Defining everything in a single state
  **/
  const [data, setData] = useLegacyState({
    a: 'A',
    b: 'B'
  })

  /**
  * Change the state of the component the same way as useState
  **/
  const changeHalfState = () => {
    setData({a: 'C'})
  }

  return (
    <div>
      <button onClick={changeHalfState}>
        Change Legacy State
      </button>
      <div>data A : {data.a}</div>
      <div>data B : {data.b}</div>
    </div>
  );
}

export default ExperienceA;
