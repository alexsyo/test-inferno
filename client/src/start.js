import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import Home from './components/Routes/Home/Home.js';
import About from './components/Routes/About/About.js';

import './index.html';

const browserHistory = createBrowserHistory();


Inferno.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);