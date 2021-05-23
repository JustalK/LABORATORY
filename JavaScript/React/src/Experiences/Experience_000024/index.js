import React, { useReducer } from "react";

const initializer = initial => {
  return {count: initial.count + 1}
}

const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'reset':
      return initializer(initialState);
    default:
      throw new Error();
  }
}

/**
* It's important to take not that at the first render, the initialState will be pass to the initializer
* The result of the initializer is the real initial value
* It's very useful when the initial value is the result of a function
**/
const Experience = () => {
  const [count, setCount] = useReducer(reducer, initialState, initializer);

  return (
    <div>
      Count with change state in function: {count.count}<br />
      <div>
        <button onClick={() => setCount({type: 'reset'})}>Reset</button>
        <button onClick={() => setCount({type: 'increment'})}>+</button>
      </div>
    </div>
  );
}

export default Experience;
