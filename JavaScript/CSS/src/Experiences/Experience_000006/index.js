import React, { useEffect, useRef } from "react"
import Ripple from "./ripple"
import './style.css'

const Experience = () => {
  const svg = useRef()
  const button = useRef()

  useEffect(() => {
    const buttonObj = new Ripple(button.current, svg.current)
    return () => {
      buttonObj.removeEvents();
    }
  })

  return (
    <div className="experience_000006 theme-3">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false">
        <symbol id="ripply-scott" viewBox="0 0 100 100">
          <g>
            <polygon points="5.6,77.4 0,29 39.1,0 83.8,19.3 89.4,67.7 50.3,96.7" />
            <polygon fill="rgba(255,255,255,0.35)" transform="scale(0.5), translate(50, 50)" points="5.6,77.4 0,29 39.1,0 83.8,19.3 89.4,67.7 50.3,96.7" />
            <polygon fill="rgba(255,255,255,0.25)" transform="scale(0.25), translate(145, 145)" points="5.6,77.4 0,29 39.1,0 83.8,19.3 89.4,67.7 50.3,96.7" />
          </g>
        </symbol>
      </svg>
      <div aria-hidden="true">
        <button ref={button} id="js-ripple-btn" className="button styl-material">
          Click for Ripple
          <svg className="ripple-obj">
            <use width="4" height="4" ref={svg} className="js-ripple" xlinkHref="#ripply-scott"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Experience;
