import React, { useLayoutEffect } from "react"
import Splitting from 'splitting'
import './style.css'

const Experience = () => {

  useLayoutEffect(() => {
    Splitting()
  })

  return (
    <div className="container">
      <a className="btn" data-splitting="words" href="nowhere">Download a Car</a>
    </div>
  );
}

export default Experience;
