import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll">
    <div style={{ height: "400vh", background: "pink" }}>
      <div class="dot">
        <h1>Part 1</h1>
      </div>
    </div>
    <div style={{ height: "200vh", background: "red" }}>
      <div class="dot">
        <h1>Part 2</h1>
      </div>
    </div>
    <div style={{ height: "200vh", background: "blue" }}>
      <div class="dot">
        <h1>Part 3</h1>
      </div>
    </div>
    <div style={{ height: "600vh", background: "red" }}>
      <div class="dot">
        <h1>Part 4 (600vh)</h1>
      </div>
    </div>
    <div style={{ height: "200vh", background: "blue" }}>
      <div class="dot">
        <h1>Part 5</h1>
      </div>
    </div>
    <div style={{ height: "200vh", background: "red" }}>
      <div class="dot">
        <h1>Part 6</h1>
      </div>
    </div>
    <div style={{ height: "200vh", background: "blue" }}>
      <div class="dot">
        <h1>Part 7</h1>
      </div>
    </div>
    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
