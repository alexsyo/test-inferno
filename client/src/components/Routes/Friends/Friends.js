import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import * as resourcesAction from 'redux/actions/resourcesActions';

class Friends extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (
      <div>
        <p>...are awsome!</p>
        <button onClick={this.props.consume.bind(this, 'food')}>Consume Food</button>
        <button onClick={this.props.consume.bind(this, 'wood')}>Consume Wood</button>
        <button onClick={this.props.consume.bind(this, 'stone')}>Consume Stone</button>
      </div>
    );

  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    consume: resourcesAction.consume
  }, dispatch);

};

export default connect(null,mapDispatchToProps)(Friends);