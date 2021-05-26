class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   list
    // };
  }

  render() {
    return (
      <div className="home-page">
        <h1>Checkout</h1>
        <button>Checkout</button>
      </div>
    )
  }
};

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="user">
        <h3>User Information</h1>
        <input className="name" id="user" type="text" placerholder="first and last name"/>
        <button>Next</button>
      </div>
    )
  }
};

class Shipping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phonenumber: '',
    };
  }

  render() {
    return (
      <div className="shipping">
        <h3>Shipping Information</h1>
        <input class/>
        <button>Next</button>
      </div>
    )
  }
};

// at the end of components list -- render the app to the html view?
ReactDOM.render(<App />, document.getElementById('app'));

