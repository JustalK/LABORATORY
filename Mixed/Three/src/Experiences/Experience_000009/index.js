import React, { useEffect, useLayoutEffect, useRef } from "react"
import Animation from "./index_three"
import { removeAllChildNodes } from '../_helper/dom'
import './style.css'

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
    <div id="app">
        <section className="container">
            <article className="tile">
                <figure className="tile__figure">
                    <img
                      src="./1.jpeg"
                      className="tile__image"
                      alt="LOL"
                      width="400"
                    />
                </figure>
            </article>
        </section>

        <canvas className="canvas" ref={canvas}></canvas>
    </div>
  );
}

export default Experience;
