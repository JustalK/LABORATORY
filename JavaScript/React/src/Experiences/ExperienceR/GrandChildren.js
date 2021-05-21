import React, { useContext } from "react";
import { Count } from "./Count"

export default function GrandChildren( ) {
  const countA = useContext(Count)
  return (
    <div>
      <div>countA: {countA}</div>
    </div>
  );
}
