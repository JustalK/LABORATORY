import React, { useRef, useState } from "react";
import Children from './Children';
import "./style.css"

const Experience = () => {
  const parent = useRef()
  const [active, setActive] = useState(false)

  return (
    <div ref={parent} className="content_000027">
      <button onClick={() => setActive(a => !a)}>Active modal</button>
      <Children parent={parent} active={active} />
    </div>
  );
}

export default Experience;
