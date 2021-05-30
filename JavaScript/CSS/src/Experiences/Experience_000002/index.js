import React, { useEffect, useRef } from "react"
import Mouse from "./mouse"
import Circle from "./circle"
import'./style.css'

const Experience = () => {
  const mouseRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    const mouseObj = new Mouse(mouseRef.current)
    const circleObj = new Circle(circleRef.current)
    return () => {
      mouseObj.removeEvents()
      circleObj.removeEvents()
    }
  }, [])

  return (
    <div>
      <main className="page">
        <div className="page__inner">
        <nav className="nav">
           <a href="h" className="link">
            <svg className="settings-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
             <g className="settings-icon__group settings-icon__group--1">
               <line className="settings-icon__line" x1="79.69" y1="16.2" x2="79.69" y2="83.8"/>
               <rect className="settings-icon__rect" x="73.59" y="31.88" width="12.19" height="12.19"/>
              </g>
             <g className="settings-icon__group settings-icon__group--2">
               <line className="settings-icon__line" x1="50.41" y1="16.2" x2="50.41" y2="83.8"/>
               <rect className="settings-icon__rect" x="44.31" y="54.33" width="12.19" height="12.19"/>
             </g>
             <g className="settings-icon__group settings-icon__group--3">
               <line className="settings-icon__line" x1="20.31" y1="16.2" x2="20.31" y2="83.8"/>
               <rect className="settings-icon__rect" x="14.22" y="26.97" width="12.19" height="12.19"/>
             </g>
            </svg>
           </a>
          </nav>
          <div ref={mouseRef} className="cursor cursor--small"></div>
          <canvas ref={circleRef} className="cursor cursor--canvas" resize="true"></canvas>

        </div>
      </main>
  </div>
  );
}

export default Experience;
