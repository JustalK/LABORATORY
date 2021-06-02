import React, { useEffect, useRef } from "react"
import ButtonCtrl from './buttonCtrl'
import './style.css'

const Experience = () => {
  const button = useRef(null);
  const buttonObj = useRef(null);

  useEffect(() => {
    buttonObj.current = new ButtonCtrl(button.current)
    return () => {
      buttonObj.current.removeEvents()
    }
  }, []);

  return (
    <div className="experience_000001">
      <div className="container">
        <button ref={button} className="button">
          <span className="button__text">
            <span className="button__text-inner">Send</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Experience;
