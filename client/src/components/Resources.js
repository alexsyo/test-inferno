import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';

class Resources extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <ul>
                <li>
                    <p>Food: {this.props.resources.food}</p>
                </li>
                <li>
                    <p>Wood: {this.props.resources.wood}</p>
                </li>
                <li>
                    <p>Stone: {this.props.resources.stone}</p>
                </li>
            </ul>
        );

    }

}

const mapStateToProps = (state) => {

    return { resources: state.resources};

} 

export default connect(mapStateToProps, null)(Resources);
