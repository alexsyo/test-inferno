import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import * as resourcesAction from 'redux/actions/resourcesActions';

class Stuff extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (
      <div>
        <p>Godd stuff...</p>
        <button onClick={this.props.store.bind(this, 'food')}>Gather Food</button>
        <button onClick={this.props.store.bind(this, 'wood')}>Gather Wood</button>
        <button onClick={this.props.store.bind(this, 'stone')}>Gather Stone</button>
      </div>
    );

  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    store: resourcesAction.store
  }, dispatch);

};

export default connect(null,mapDispatchToProps)(Stuff);