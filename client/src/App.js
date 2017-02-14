import Inferno from 'inferno';
import Component from 'inferno-component';
import NavBar from './components/NavBar.js';

class App extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (

      <div>
        <NavBar />
        <h1>Inferno App</h1>
        {this.props.children}
      </div>

    );

  }

}

export default App;