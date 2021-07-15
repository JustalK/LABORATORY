import './App.css';
import React from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import * as Experiences from './Experiences'
import { AnimatePresence } from "framer-motion";
import Scene from './3d/Scene';

function App() {
  const location = useLocation();

  return (
    <div>
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
          <Scene />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
