import React, { useLayoutEffect } from "react"
import Splitting from 'splitting'
import './style.css'

const Experience = () => {

  useLayoutEffect(() => {
    Splitting({whitespace: true})
  })

  return (
    <div className="experience_000008">
        <span data-splitting="">Click Click Click Click Click Click</span>
    </div>
  );
}

export default Experience;
