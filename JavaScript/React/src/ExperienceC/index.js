import React, { useState, useEffect } from "react";

const ExperienceC = () => {
  const [count, setCount] = useState(0)

  /**
  * This useEffect will trigger constantly since count change at each render
  **/
  useEffect(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <div>count : {count}</div>
    </div>
  );
}

export default ExperienceC;
