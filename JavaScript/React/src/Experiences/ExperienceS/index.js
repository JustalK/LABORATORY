import React from "react"
import ChildrenRenderProp from "./ChildrenRenderProp"
import Children from "./Children"

/**
* This technique is called render props
* You can share code between component with this technique
* It's very usefull for writing HOC 
**/
export default function ExperienceS() {
  return (
    <div>
      <ChildrenRenderProp render={() => (
        <div>I am a props render</div>
      )} />
      <Children />
    </div>
  );
}
