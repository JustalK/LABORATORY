import React from "react"
import Children from "./Children"
import ChildrenNew from "./ChildrenNew"

/**
* This technique is called render props
* You can share code between component with this technique
* It's very usefull for writing HOC
**/
export default function ExperienceS() {
  return (
    <div>
      <table>
        <tr>
          <Children />
        </tr>
      </table>
      <table>
        <tr>
          <ChildrenNew />
        </tr>
      </table>
    </div>
  );
}
