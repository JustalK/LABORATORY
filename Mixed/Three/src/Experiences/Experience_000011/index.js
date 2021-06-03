import React, { useEffect, useLayoutEffect, useRef, createRef } from "react"
import Animation from "./index_three"
import { removeAllChildNodes } from '../_helper/dom'
import './style.css'

const Experience = () => {
  const canvas = useRef(null)
  const imageRef = useRef([])

  useEffect(() => {
    const animation = new Animation(canvas.current, imageRef.current)
    animation.render()
    return () => {
      animation.removeEvents()
    }
  }, []);

  useLayoutEffect(() => {
    removeAllChildNodes(canvas.current)
  }, [])

  return (
    <div className="experience_000011">
      <section>
        <div className="image-container">
          <img
            src="./1.jpeg"
            className="tile__image"
            ref={el => imageRef.current[0] = el}
            alt="LOL"
            width="400"
          />
        </div>
      </section>
      <section>
        <div className="image-container">
          <img
            src="./2.jpeg"
            className="tile__image"
            ref={el => imageRef.current[1] = el}
            alt="LOL"
            width="400"
          />
        </div>
      </section>
      <div ref={canvas} id="canvas">
      </div>
    </div>
  );
}

export default Experience;
