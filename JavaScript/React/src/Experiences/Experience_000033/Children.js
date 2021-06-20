import React, { forwardRef, useState, useEffect } from 'react'

const Children = forwardRef((_,ref) => {
  const [val, setVal] = useState(0)

  useEffect(() => {
    ref.current = setVal
  }, [ref])

  return (
    <div>
      <div>{val}</div>
      <button onClick={() => setVal(c => c + 1)}>Increment in the children</button>
    </div>
  )
})

export default Children
