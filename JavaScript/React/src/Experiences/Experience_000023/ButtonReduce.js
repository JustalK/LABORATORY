import React, { useReducer } from "react";

const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0};
    default:
      throw new Error();
  }
}

/**
* This time the function is pure and outside of the component. So it's easy to test
* It also dont have any problem with amanging a lot of trigger
**/
const ButtonReduce = () => {
  const [count, setCount] = useReducer(reducer, initialState);

  const boom = () => {
    setCount({type: 'reset'})
    for(let i=0; i < 1000; i++) {
      setTimeout(() => {
        setCount({type: 'increment'})
      }, 1000 + i)
    }
    for(let i=0; i < 1000; i++) {
      setTimeout(() => {
        setCount({type: 'decrement'})
      }, 3000 + i)
    }
  }

  return (
    <div>
      Count with change state in function: {count.count}<br />
      <div>
        <button onClick={() => boom()}>Run +1 * 1000/-1 * 1000 with a very fast timing</button><br />
        <button onClick={() => setCount({type: 'reset'})}>Reset</button>
        <button onClick={() => setCount({type: 'decrement'})}>-</button>
        <button onClick={() => setCount({type: 'increment'})}>+</button>
      </div>
    </div>
  );
}

export default ButtonReduce;
