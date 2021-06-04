import React, { useEffect, useLayoutEffect, useRef } from "react"
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
        <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a elit a libero lobortis eleifend quis id ante. Maecenas aliquet, tellus non aliquet tristique, mi felis faucibus mauris, vel ultricies tellus purus eget nisi. Donec vulputate aliquam ante, id malesuada nunc maximus nec. Ut eu bibendum nibh. Proin efficitur eros felis. In porttitor aliquet elementum. Duis sed varius dui. Nulla erat nibh, rhoncus eu lorem vel, cursus porttitor nisl. Donec in sagittis urna. Duis placerat dolor in massa vulputate, quis sodales ante gravida. Cras placerat aliquam quam quis elementum. Sed vel sapien tristique, iaculis nibh vitae, commodo purus. Cras porttitor bibendum mattis. Sed sit amet fermentum nunc.
        </span>
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
        <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a elit a libero lobortis eleifend quis id ante. Maecenas aliquet, tellus non aliquet tristique, mi felis faucibus mauris, vel ultricies tellus purus eget nisi. Donec vulputate aliquam ante, id malesuada nunc maximus nec. Ut eu bibendum nibh. Proin efficitur eros felis. In porttitor aliquet elementum. Duis sed varius dui. Nulla erat nibh, rhoncus eu lorem vel, cursus porttitor nisl. Donec in sagittis urna. Duis placerat dolor in massa vulputate, quis sodales ante gravida. Cras placerat aliquam quam quis elementum. Sed vel sapien tristique, iaculis nibh vitae, commodo purus. Cras porttitor bibendum mattis. Sed sit amet fermentum nunc.
        </span>
      </section>
      <div ref={canvas} id="canvas">
      </div>
    </div>
  );
}

export default Experience;
