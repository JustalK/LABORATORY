import React, { useEffect } from "react"

/**
* This object thow aan error
**/
export default function ErrorObject() {

  useEffect(() => {
    throw new Error('Error')
  })

  return (<div />)
}
