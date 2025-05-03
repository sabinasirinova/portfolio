import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/about">Haqqında</Link></li>
            <li><Link to="/portfolio">İş nümunələri</Link></li>
            <li><Link to="/contact">Əlaqə məlumatları</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
