import Inferno from 'inferno';
import Component from 'inferno-component';
import { Motion, spring } from 'inferno-motion';
import NavBar from './components/NavBar.js';
import Resources from './components/Resources.js';
import Population from './components/Population.js';

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
        <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1)}}>
          {val => <div style={val}>{this.props.children}</div>}
        </Motion>
      </div>

    );

  }

}

export default App;