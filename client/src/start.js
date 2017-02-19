import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'inferno-redux';
import store from './redux/store';
import App from './App';
import Home from './components/Routes/Home/Home.js';
import Stuff from './components/Routes/Stuff/Stuff.js';
import Friends from './components/Routes/Friends/Friends.js';
import About from './components/Routes/About/About.js';

import './index.html';

const browserHistory = createBrowserHistory();


Inferno.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <IndexRoute component={Home} />
        <Route path="/stuff" component={Stuff} />
        <Route path="/friends" component={Friends} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);