import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

class NavBar extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/stuff">Stuff</Link>
                </li>
                <li>
                    <Link to="/friends">Friends</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        );

    }

}

export default NavBar;