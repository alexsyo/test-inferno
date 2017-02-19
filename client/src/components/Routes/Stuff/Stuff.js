import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import * as resourcesAction from 'redux/actions/resourcesActions';

class Stuff extends Component {

  constructor(props) {

    super(props);
    this.showTest = this.showTest.bind(this);
    this.state = {};
    this.state.var1 = false;
    this.state.test = null;
    
  }

  showTest() {

    this.state.var1 = !this.state.var1;

    if (!!this.state.var1) {

      import('./Test.js').then((Test) => {

        this.setState({test: <Test.default />});
        
      });

    } else {

      this.setState({test: null});

    }

  }

  render() {

    return (
      <div>
        <p>Godd stuff...</p>
        <button onClick={this.props.store.bind(this, 'food')}>Gather Food</button>
        <button onClick={this.props.store.bind(this, 'wood')}>Gather Wood</button>
        <button onClick={this.props.store.bind(this, 'stone')}>Gather Stone</button>
        <button onClick={this.showTest}>Say Hi!</button>
        {this.state.test}
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