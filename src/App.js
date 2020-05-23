import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Concession from './pages/Concession';
import Store from './pages/Store';
import Gift from './pages/Gift';
import Reward from './pages/Reward';


export default function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/movie" component={Movie} />
           <Route path="/concession" component={Concession} />
           <Route path="/store" component={Store} />
           <Route path="/gift" component={Gift} />
           <Route path="/reward" component={Reward} />
         </Switch>

         <Footer />
      </div>
    </Router>
  );
}

// Add a route for Become a Member and Sign In
