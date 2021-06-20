import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Children = forwardRef(({val}, ref) => {
  const first = useRef()
  const second = useRef()

  useImperativeHandle(ref, () => ({
    first: () => {
      return first.current
    },
    second: () => {
      return second.current
    }
  }));

  return (
    <div>
      <span ref={first}>Text inside the children</span>
      <span ref={second}>Second Text inside the children</span>
    </div>
  )
})

export default Children
