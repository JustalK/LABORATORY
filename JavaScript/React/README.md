# React Laboratory

## Experiences

* **Experience_000001**: Writting a custom useLegacyState
* **Experience_000002**: Writting multiple useEffect with different prop for rerendering
* **Experience_000003**: Memory Link example with rerendering
* **Experience_000004**: Hidden Memory Link with cleanup of useEffect
* **Experience_000005**: Order of the useEffect and Cleanup
* **Experience_000006**: using ref as instance variable (+ cleanup problem)
* **Experience_000007**: useLayoutEffect vs useEffect (useEffect version)
* **Experience_000008**: useLayoutEffect vs useEffect (useLayoutEffect version)
* **Experience_000009**: useEffect does not return anything
* **Experience_000010**: useEffect in a useState
* **Experience_000011**: Difference between useRef and createRef
* **Experience_000012**: createRef and render prioritization
* **Experience_000013**: Multiple nested useState
* **Experience_000014**: Multiple parameter on useState
* **Experience_000015**: Creating a custom hook
* **Experience_000016**: Passing a global object (Normal one-way binding with props)
* **Experience_000017**: Passing a global object (UseContext)
* **Experience_000018**: Render Prop for creating HOC
* **Experience_000019**: Fragment and new short syntax
* **Experience_000020**: ErrorBoundary (The try catch for component)
* **Experience_000021**: Suspense and Relay (fetch-while-rendering) (For this one you need to fill up the REACT_APP_GITHUB_AUTH_TOKEN in .env.local - look at the.env.example and copy from it)
* **Experience_000022**: useState vs useReducer (difference of timing)
* **Experience_000023**: useState vs useReducer (Pure function, tests and timing)
* **Experience_000024**: useReducer (How to use the third parameter))
* **Experience_000025**: useMemo (a function not re-evaluated called inside a component)
* **Experience_000026**: useCallback (a function not re-evaluated with child components)
* **Experience_000027**: Create a portal (breaking throught the DOM three)
* **Experience_000028**: Using the profiler (also using the react devtool extention for chrome)
* **Experience_000029**: Uncontrolled vs controlled component
* **Experience_000030**: Forward a ref or Getting a ref of a children from parent
* **Experience_000031**: useImperativeHandle (Forward multiple refs)
* **Experience_000032**: useRef vs useState (Optimization hack)
* **Experience_000033**: Update state of children from parent
* **Experience_000034**: useState is stable (playing with tick)
* **Experience_000035**: Global EventListener instead of onChange (hard because so many cases)
* **Experience_000036**: Inception (A component in a component)
* **Experience_000037**: Recursive component and useState
* **Experience_000038**: Testing performance (map inside)
* **Experience_000039**: Testing performance (map outside) (Best)

## Fail Experiences (Not possible)

* **Fail_Experience_000001**: Putting a hook inside a hook
* **Fail_Experience_000002**: Putting a hook inside a condition

## FAQ

* **Question 1**: Should I use my API call inside useEffect or use the Suspense ?
The problem with API call inside useEffect is between the moment we do the call and the moment we receive the data, the DOM could have already change. Also doing so, we are actually blocking the render before showing anything. For avoiding this problem, we can load the data using Suspense and Relay.
