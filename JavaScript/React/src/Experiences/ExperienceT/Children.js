import React, { Fragment } from "react"

/**
* Fragment let you have multiple node at the same level
**/
export default function Children() {
  return (
    <Fragment>
      <tr>First</tr>
      <tr>Second</tr>
    </Fragment>
  );
}
