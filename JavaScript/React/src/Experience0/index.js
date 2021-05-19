import React, { useState, useEffect } from "react";

const ExperienceD = () => {
  const [count, setCount] = useState(0)

  /**
  * You cannot put a hook inside a hook
  **/
  useEffect(() => {
    /**
    /* useEffect(() => {
    /*  setCount(c => c + 1)
    /* }, [])
    **/
  }, [])

  /**
  * You cannot put a hook inside a function
  **/
  const useless = () => {
  /**
    useEffect(() => {

    }, [])
  **/
  }

  /**
  * You cannot put a hook inside a callback
  **/
  setTimeout(() => {
    /**
    useEffect(() => {

    }, [])
    **/
  })

  return (
    <div>
      <div>count : {count}</div>
    </div>
  );
}

export default ExperienceD;
