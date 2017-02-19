import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import * as resourcesActions from 'redux/actions/resourcesActions';
import * as populationActions from 'redux/actions/populationActions';

class Friends extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    return (
      <div>
        <p>...are awsome!</p>
        <button onClick={this.props.feed}>Eat!!</button>
        <button onClick={this.props.consume.bind(this, 'wood')}>Consume Wood</button>
        <button onClick={this.props.consume.bind(this, 'stone')}>Consume Stone</button>
      </div>
    );

  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    feed: populationActions.feed,
    consume: resourcesActions.consume
  }, dispatch);

};

export default connect(null,mapDispatchToProps)(Friends);