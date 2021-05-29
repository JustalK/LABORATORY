import React, { useEffect, useLayoutEffect, useRef } from "react"
import { createAnimation } from "./index_three"
import { removeAllChildNodes } from '../_helper/dom'

const Experience = () => {
  const canvas = useRef(null)

  useEffect(() => {
    createAnimation(canvas.current)
  }, []);

  useLayoutEffect(() => {
    removeAllChildNodes(canvas.current)
  }, [])

  return (
    <div ref={canvas} id="canvas">
    </div>
  );
}

export default Experience;
