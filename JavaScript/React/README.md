# React Laboratory

## Experiences

* **ExperienceA**: Writting a custom useLegacyState
* **ExperienceB**: Writting multiple useEffect with different prop for rerendering
* **ExperienceC**: Memory Link example with rerendering
* **ExperienceD**: Hidden Memory Link with cleanup of useEffect
* **ExperienceE**: Order of the useEffect and Cleanup
* **ExperienceF**: using ref as instance variable (+ cleanup problem)
* **ExperienceG**: useLayoutEffect vs useEffect (useEffect version)
* **ExperienceG2**: useLayoutEffect vs useEffect (useLayoutEffect version)
* **ExperienceH**: useEffect does not return anything
* **ExperienceI**: useEffect in a useState
* **ExperienceJ**: Difference between useRef and createRef
* **ExperienceK**: createRef and render prioritization
* **ExperienceL**: Multiple nested useState
* **ExperienceO**: Multiple parameter on useState
* **ExperienceP**: Creating a custom hook
* **ExperienceQ**: Passing a global object (Normal one-way binding with props)
* **ExperienceR**: Passing a global object (UseContext)
* **ExperienceS**: Render Prop for creating HOC
* **ExperienceT**: Fragment and new short syntax
* **ExperienceU**: ErrorBoundary (The try catch for component)
* **ExperienceV**: Suspense and Relay (fetch-while-rendering) (For this one you need to fill up the REACT_APP_GITHUB_AUTH_TOKEN in .env.local - look at the.env.example and copy from it)

## Fail Experiences (Not possible)

* **FailExperience0**: Putting a hook inside a hook
* **FailExperience1**: Putting a hook inside a condition

## FAQ

* **Question 1**: Should I use my API call inside useEffect or use the Suspense ?
The problem with API call inside useEffect is between the moment we do the call and the moment we receive the data, the DOM could have already change. Also doing so, we are actually blocking the render before showing anything. For avoiding this problem, we can load the data using Suspense and Relay.
