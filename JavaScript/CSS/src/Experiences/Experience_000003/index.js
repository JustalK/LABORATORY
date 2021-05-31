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
          <div ref={mouseRef} className="cursor cursor--small"></div>
          <canvas ref={circleRef} className="cursor cursor--canvas" resize="true"></canvas>

        </div>
      </main>
  </div>
  );
}

export default Experience;
