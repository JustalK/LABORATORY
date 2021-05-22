import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorObject from './ErrorObject'
import OnError from './OnError'

/**
* This will use a component has a fallback if an error get trigger
* A button allow us to re-render the component and come back from the erro
* It allows us to have only a part of the app to crash and the other part to run
**/
export default function ExperienceS() {
  const [trigger, setTrigger] = useState(false)
  return (
    <div>
      <ErrorBoundary
        FallbackComponent={OnError}
        onReset={() => {
          console.log('Trigger Re-Render')
          setTrigger(false)
        }}>
        {trigger && <ErrorObject />}
        <button onClick={() => setTrigger(true)}>Trigger an error</button>
      </ErrorBoundary>
    </div>
  );
}
