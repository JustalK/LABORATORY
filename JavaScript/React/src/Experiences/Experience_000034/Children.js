import React, { useState } from 'react'

/**
* useState is stable, so it's not import to split it inside a function or to regroup it
**/
const Children = ({val}) => {
  const [useless, setUseless] = useState(true)
  const [useless2, setUseless2] = useState(true)

  const changeOneValue = () => {
    setUseless(c => !c)
  }

  const changeTwoValues = () => {
    setUseless(c => !c)
    setUseless2(c => !c)
  }

  const changeTwoValuesWithTimer = () => {
    setUseless(c => !c)
    // Wait the next tick
    setTimeout(() => {
      setUseless2(c => !c)
    }, 0)
  }

  const changeTwoValuesWithTwoFunctions = () => {
    changeTwoValuesWithTwoFunctionsAlt();
    setUseless2(c => !c)
  }
  const changeTwoValuesWithTwoFunctionsAlt = () => {
    setUseless(c => !c)
  }

  return (
    <>
      <button onClick={changeOneValue}>One change setState</button>
      <button onClick={changeTwoValues}>Two change setState</button>
      <button onClick={changeTwoValuesWithTwoFunctions}>Two change setState with two functions</button>
      <button onClick={changeTwoValuesWithTimer}>Two change setState with timer</button>
      <div>Value Useless : {useless.toString()}</div>
      <div>Value Useless 2 : {useless2.toString()}</div>
      <div>Value Parent : {val}</div>
    </>
  )
}

export default Children
