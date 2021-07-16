import './App.css';
import React from "react";
import Experience000001 from './Experiences/Experience_000001'
import Experience000002 from './Experiences/Experience_000002'
import { AnimatePresence } from "framer-motion";
import Scene from './3d/Scene';
import { Route } from 'wouter'

function App() {
  return (
    <div className="content">
      <AnimatePresence exitBeforeEnter>
        <Scene>
            <Route path="/a">
              <Experience000001 />
            </Route>
            <Route path="/b">
              <Experience000002 />
            </Route>
            <Route path="/">
              <Experience000001 />
            </Route>
        </Scene>
      </AnimatePresence>
    </div>
  );
}

export default App;
