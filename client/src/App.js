import Inferno from 'inferno';
import Component from 'inferno-component';
import NavBar from './components/NavBar.js';
import Resources from './components/Resources.js';
import Population from './components/Population.js';
import RouteWrapper from './components/Routes/RouteWrapper.js';

class App extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (

      <div>
        <NavBar />
        <Resources />
        <Population />
        <h1>Inferno App</h1>
        <RouteWrapper>
          {this.props.children}
        </RouteWrapper>
      </div>

    );

  }

}

export default App;