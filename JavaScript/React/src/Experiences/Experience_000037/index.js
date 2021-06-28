import React, { useState } from "react";

const Experience = ({ init = 0}) => {
  const [val, setVal] = useState(init + 1)
  return (
    <div>
      {init === 0 && (
        <>
          <span>Will the change will propagate ? Increment until 10</span>
          <button onClick={() => setVal(c => c + 1)}> Increment by 1</button>
        </>
      )}
      <span>New experience: {val}</span>
      {init < 10 && <Experience init={val} />}
    </div>
  );
}

export default Experience;
