import './App.css';
import React from "react";
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import * as Experiences from './Experiences'
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

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
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {Object.keys(Experiences).map((e, index) => {
              const Type = Experiences[e];
              return (
                <Route key={index} path={"/" + e}>
                  <Type location={location} />
                </Route>
            )})}
            <Route path="/">
              <span>Click on one of the experience on the left side</span>
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
