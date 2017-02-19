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
                    <p>People: {this.props.population.people}</p>
                </li>
                <li>
                    <p>Health: {this.props.population.health}</p>
                </li>
            </ul>
        );

    }

}

const mapStateToProps = (state) => {

    return { population: state.population};

} 

export default connect(mapStateToProps, null)(Resources);
