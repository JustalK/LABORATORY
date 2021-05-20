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
import ExperienceH from './ExperienceH'
import ExperienceI from './ExperienceI'
import ExperienceJ from './ExperienceJ'
import ExperienceK from './ExperienceK'
import ExperienceL from './ExperienceL'

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
              <li>
                <Link to="/experience_h">ExperienceH</Link>
              </li>
              <li>
                <Link to="/experience_i">ExperienceI</Link>
              </li>
              <li>
                <Link to="/experience_j">ExperienceJ</Link>
              </li>
              <li>
                <Link to="/experience_k">ExperienceK</Link>
              </li>
              <li>
                <Link to="/experience_l">ExperienceL</Link>
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
            <Route path="/experience_h">
              <ExperienceH />
            </Route>
            <Route path="/experience_i">
              <ExperienceI />
            </Route>
            <Route path="/experience_j">
              <ExperienceJ />
            </Route>
            <Route path="/experience_k">
              <ExperienceK />
            </Route>
            <Route path="/experience_l">
              <ExperienceL />
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
