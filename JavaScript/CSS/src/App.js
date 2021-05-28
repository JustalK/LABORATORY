import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as Experiences from './Experiences'

function App() {
  return (
    <Router>
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
          <Switch>
            {Object.keys(Experiences).map((e, index) => {
              const Type = Experiences[e];
              return (
                <Route key={index} path={"/" + e}>
                  <Type />
                </Route>
            )})}
            <Route path="/">
              <span>Click on one of the experience on the left side</span>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
