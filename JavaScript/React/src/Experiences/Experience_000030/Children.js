import React, { forwardRef } from 'react'

const Children = forwardRef(({val}, ref) => {
  return (
    <div>
      <span ref={ref}>Text inside the children</span>
    </div>
  )
})

export default Children
