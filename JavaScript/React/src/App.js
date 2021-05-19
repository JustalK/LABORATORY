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
import ExperienceC from './ExperienceC'
import ExperienceD from './ExperienceD'
import ExperienceE from './ExperienceE'
import ExperienceF from './ExperienceF'
import ExperienceG from './ExperienceG'
import ExperienceG2 from './ExperienceG2'

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
              <li>
                <Link to="/experience_c">ExperienceC</Link>
              </li>
              <li>
                <Link to="/experience_d">ExperienceD</Link>
              </li>
              <li>
                <Link to="/experience_e">ExperienceE</Link>
              </li>
              <li>
                <Link to="/experience_f">ExperienceF</Link>
              </li>
              <li>
                <Link to="/experience_g">ExperienceG</Link>
              </li>
              <li>
                <Link to="/experience_g2">ExperienceG2</Link>
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
            <Route path="/experience_c">
              <ExperienceC />
            </Route>
            <Route path="/experience_d">
              <ExperienceD />
            </Route>
            <Route path="/experience_e">
              <ExperienceE />
            </Route>
            <Route path="/experience_f">
              <ExperienceF />
            </Route>
            <Route path="/experience_g">
              <ExperienceG />
            </Route>
            <Route path="/experience_g2">
              <ExperienceG2 />
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
