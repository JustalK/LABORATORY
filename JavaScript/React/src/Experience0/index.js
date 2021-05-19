import React, { useState, useEffect } from "react";

const ExperienceD = () => {
  const [count, setCount] = useState(0)

  /**
  * You cannot put a hook inside a hook
  **/
  useEffect(() => {
    /**
    /* useEffect(() => {
    /*  setCount(c => c + 1)
    /* }, [])
    **/
  }, [])

  return (
    <div>
      <div>count : {count}</div>
    </div>
  );
}

export default ExperienceD;
