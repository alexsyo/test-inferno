import Inferno from 'inferno';
import Component from 'inferno-component';

class Home extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (
      <div className="route">
        <p>Home sweet home.</p>
      </div>
    );

  }

}

export default Home;