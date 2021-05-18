import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ExperienceA from './ExperienceA'
import ExperienceB from './ExperienceB'

function App() {
  return (
    <Router>
      <div>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/experience_a">ExperienceA</Link>
              </li>
              <li>
                <Link to="/experience_b">ExperienceB</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <Switch>
            <Route path="/experience_a">
              <ExperienceA />
            </Route>
            <Route path="/experience_b">
              <ExperienceB />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
