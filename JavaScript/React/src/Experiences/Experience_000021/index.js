import React, { Suspense, lazy } from 'react'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { preloadedQuery } from './AppRepository'
const Children = lazy(() => import("./Children"))

/**
* npm install --save relay-runtime react-relay
* npm install --save-dev relay-compiler graphql babel-plugin-relay
*
* The above component needs to know how to access the Relay environment, and we
* need to specify a fallback in case it suspends:
* - <RelayEnvironmentProvider> tells child components how to talk to the current
*   Relay Environment instance
* - <Suspense> specifies a fallback in case a child suspends.
**/
export default function ExperienceS() {
  return (
    <div>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={<div>Loading...</div>}>
          <Children preloadedQuery={preloadedQuery} />
        </Suspense>
      </RelayEnvironmentProvider>
    </div>
  );
}
