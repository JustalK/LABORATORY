import React, { useState, useEffect } from "react";

const ExperienceH = () => {
  const [count, setCount] = useState(0)

  const useless = useEffect(() => {
    setCount(1)
    return () => {
      setCount(2)
    }
  }, [])

  useEffect(() => {
    setCount(useless)
  }, [useless])

  return (
    <div>
      <div>count : {count}</div>
    </div>
  );
}

export default ExperienceH;
