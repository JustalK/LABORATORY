import React, { useEffect, useState } from "react";

// The goal here is to manage to catch the value of both input despite not using the onChange and using a global event
const Experience = () => {
  const [val, setVal] = useState('');

  const handleKey = (e) => {
    if (e.code === "Backspace") {
      setVal(val.slice(0, -1))
    } else if(e.code === "Tab") {
      setVal(val + "\n")
    } else {
      setVal(val + e.key)
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKey);
    return () => {
      window.removeEventListener('keyup', handleKey);
    }
  })

  return (
    <div>
      <input /><br />
      <input /><br /><br />
      {val}
    </div>
  );
}

export default Experience;
