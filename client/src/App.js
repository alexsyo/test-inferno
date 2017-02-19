import Inferno from 'inferno';
import Component from 'inferno-component';
import NavBar from './components/NavBar.js';
import ResourcesList from './components/ResourcesList.js';

class App extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (

      <div>
        <NavBar />
        <ResourcesList />
        <h1>Inferno App</h1>
        {this.props.children}
      </div>

    );

  }

}

export default App;