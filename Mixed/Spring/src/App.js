import './App.css';
import React from "react";
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import * as Experiences from './Experiences'
import Experience_000000 from './Experiences/Experience_000000'
import Experience_000001 from './Experiences/Experience_000001'
import Experience_000002 from './Experiences/Experience_000002'
import Experience_000003 from './Experiences/Experience_000003'
import { useTransition, animated } from 'react-spring'

function App() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100vw, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100vw, 0, 0)' },
    mass: 1,
    tension: 210,
    friction: 20
  })

  return (
    <div>
      <div className="navigation">
        <nav>
          <ul>
            {Object.keys(Experiences).map((e, index) => (
              <li key={index} >
                <Link to={"/" + e}>{e}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="content">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/experience_000000" component={Experience_000000} location={location} exact />
              <Route path="/experience_000001" component={Experience_000001} />
              <Route path="/experience_000002" component={Experience_000002} />
              <Route path="/experience_000003" component={Experience_000003} />
              <Route path="/">
                <span>Click on one of the experience on the left side</span>
              </Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
