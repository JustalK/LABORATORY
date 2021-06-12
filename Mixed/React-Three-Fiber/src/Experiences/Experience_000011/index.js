import React, { useRef } from "react"
import Overlay from "./Overlay"
import './style.css'

export default function Experience() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <div className="experience_000011">
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </div>
  )
}
