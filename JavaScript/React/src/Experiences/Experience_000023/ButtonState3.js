import React, { useState } from "react";

/**
* Ok, now it's good I can test but It creates an issue
* If we do a lot of interaction with the function in a short amount of time
* The value wont follow
**/
const ButtonState3 = () => {
  const [count, setCount] = useState(0);

  const increment = c => {
    setCount(c + 1)
  }

  const decrement = c => {
    setCount(c - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const boom = () => {
    // Reset
    reset()
    // Increment 1000 times in a very short time
    for(let i=0; i < 1000; i++) {
      setTimeout(() => {
        increment(count)
      }, 1000 + i)
    }
    // Decrement 1000 times in a very short time
    for(let i=0; i < 1000; i++) {
      setTimeout(() => {
        decrement(count)
      }, 3000 + i)
    }
    // The result should be 0 but it's gonna be -1
  }

  return (
    <div>
      Count with change state in function: {count}<br />
      <div>
        <button onClick={() => boom()}>Run +1 * 1000/-1 * 1000 with a very fast timing</button><br />
        <button onClick={reset}>Reset</button>
        <button onClick={() => decrement(count)}>-</button>
        <button onClick={() => increment(count)}>+</button>
      </div>
    </div>
  );
}

export default ButtonState3;
