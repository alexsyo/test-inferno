import Inferno from 'inferno';
import Component from 'inferno-component';

class About extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (
      <div className="route">
        <p key="about">It's me, Alex!</p>
      </div>
    );

  }

}

export default About;