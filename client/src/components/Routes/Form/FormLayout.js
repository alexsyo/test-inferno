import Inferno from 'inferno';
import Component from 'inferno-component';

class FormLayout extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (
      <div className="route">
        {this.props.children}
      </div>
    );

  }

}

export default FormLayout;