import React, { useState, useRef, useEffect, useReducer } from "react";
import './experience.css';

/**
* This experience shows the problem of the useState
* Even if we are using the same function for calculating if we reah the bottom of the bottom of the page
* The result between useState and useReducer will be different
* It's because the useState have to wait the rerender for actually incrementing
* But useReducer use the prvious value for calculating the current incrementation value
**/
const Experience = () => {
  const scroll = useRef(null)
  const movable = useRef(null)

  const isBottom = () => {
    const scrollRef = scroll.current;
    const movableRef = movable.current;
    const bottomOfPage = movableRef.clientHeight - scrollRef.clientHeight
    const bottomOfCurrentScreen = Math.abs(movableRef.getBoundingClientRect().top - scrollRef.offsetTop)
    return bottomOfPage - 200 < bottomOfCurrentScreen
  }

  const [nbrScrollState, setNbrScrollState] = useState(0)
  const [nbrScrollReducer, setNbrScrollReducer] = useReducer((state, event) => {
    if (isBottom()) {
      return state + 1
    } else {
      return state
    }
  }, 0)

  const handleScrollWithState = () => {
    if (isBottom()) {
      setNbrScrollState(nbrScrollState + 1)
    }
  }

  useEffect(() => {
    const scrollRef = scroll.current;
    scrollRef.addEventListener('scroll', handleScrollWithState)
    scrollRef.addEventListener('scroll', setNbrScrollReducer)

    return () => {
      scrollRef.removeEventListener('scroll', handleScrollWithState)
      scrollRef.removeEventListener('scroll', setNbrScrollReducer)
    }
  })

  return (
    <div>
      <div>nbrScrollState : { nbrScrollState }</div>
      <div>nbrScrollReducer : { nbrScrollReducer }</div>
      <div ref={scroll} className='scroll' >
        <div ref={movable} className='inside'>
          Scroll me
        </div>
      </div>
    </div>
  );
}

export default Experience;
