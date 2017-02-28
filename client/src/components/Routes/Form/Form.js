import Inferno from 'inferno';
import Component from 'inferno-component';
import history from 'libs/history.js';

class Form extends Component {

  constructor(props) {

    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(event) {

    event.preventDefault();

    history.push('/form/thank-you');

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <input type="number" placeholder="age" />
        </div>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="text" placeholder="postcode" />
        </div>
        <div>
          <input type="submit" placeholder="name" />
        </div>
      </form>
    );

  }

}

export default Form;