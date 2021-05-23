import React, { useState } from "react";


/**
* This is the example of facebook for using usestate
* It's working well but this method has a problem
* How will you test that the incremental button is incrementing ?
* How will you test that the decremental button is decrementing ?
* You cannot test those function out of the design.
* So this way of doing is bad in this way.
**/
const ButtonState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count with change state in onclick: {count}
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    </div>
  );
}

export default ButtonState;
