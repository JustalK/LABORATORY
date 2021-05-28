import React, { useEffect, useRef } from "react"
import Animation from "./index_three"
import './style.css'
 
const Experience = () => {
  const canvas = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      const animation = new Animation(canvas.current)
      animation.render()
    }, 50)
  }, []);

  return (
    <div id="app">
        <section className="container">
            <article className="tile">
                <figure className="tile__figure">
                    <img
                      src="./1.jpeg"
                      data-hover="./2.jpeg"
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
