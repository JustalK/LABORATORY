import React, { useEffect, useLayoutEffect, useRef } from "react"
import Animation from "./index_three"
import { removeAllChildNodes } from '../_helper/dom'

const Experience = () => {
  const canvas = useRef(null)

  useEffect(() => {
    const animation = new Animation(canvas.current)
    animation.render()
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
