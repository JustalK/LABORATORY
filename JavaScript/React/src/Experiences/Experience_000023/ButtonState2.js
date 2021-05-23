import React, { useState } from "react";

/**
* Even if you split the actions into function.
* How would you test that when if I have a negative number like -1000 and I increment I go back to -999 ?
* The problem here is the function is not pure and depends of an outside variable.
**/
const ButtonState2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => c + 1)
  }

  const decrement = () => {
    setCount(c => c - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      Count with change state in function: {count}<br />
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default ButtonState2;
