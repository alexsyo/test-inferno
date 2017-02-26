import Inferno from 'inferno';
import Component from 'inferno-component';
import { RouteTransition } from 'react-router-transition';

class RouteWrapper extends Component {

  constructor(props) {

    super(props);
    
  }

  render() {

    let path = this.context.router.location.pathname;

    return (
      <RouteTransition
        pathname={path}
        className="route-wrapper"
        atEnter={{ opacity: 0, translateX: -100 }}
        atLeave={{ opacity: 0, translateX: 100 }}
        atActive={{ opacity: 1, translateX: 0 }}
        mapStyles={styles => ({
          opacity: styles.opacity,
          transform: `translateX(${styles.translateX}%)`
        })}
      >
        {this.props.children}
      </RouteTransition>
    );

  }

}

export default RouteWrapper;