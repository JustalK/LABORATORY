import React, { Suspense, lazy } from 'react'
import Loading from './Loading'
const Children = lazy(() => import("./Children"))

/**
* This will use a component has a fallback if an error get trigger
* A button allow us to re-render the component and come back from the erro
* It allows us to have only a part of the app to crash and the other part to run
**/
export default function ExperienceS() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Children />
      </Suspense>
    </div>
  );
}
