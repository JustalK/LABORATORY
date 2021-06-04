import React from "react";
import GrandChildren from "./GrandChildren"

const Children = ({ parent, active }) => {
  return (
    <div className="children_000027">
      <GrandChildren parent={parent} active={active} />
    </div>
  );
}

export default Children;
