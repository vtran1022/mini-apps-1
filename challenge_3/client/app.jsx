class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userComponent: false,
      shippingComponent: false,
      billingComponent: false
    };

    this._onButton = this._onButton.bind(this);
  }

  _onButton(event) {
    event.preventDefault();
    if (event.target.id === 'checkout') {
      this.setState({
        userComponent: true
      });
    } else if (event.target.id === 'user') {
    this.setState({
      userComponent: false,
      shippingComponent: true
    });
    } else if (event.target.id === 'ship') {
      this.setState({
        shippingComponent: false,
        billingComponent: true
      });
    }
  }

  render() {
    return (
      <div className="home-page">
        <h1>Checkout</h1>
        <button id="checkout" onClick={this._onButton}>Checkout</button>
        {this.state.userComponent
          ? <User
            next={this._onButton}
            />
          : null
        }
        {this.state.shippingComponent
          ? <Shipping
            next={this._onButton}
            />
          : null
        }
        {this.state.billingComponent
          ? <Billing
            next={this._onButton}
            />
          : null
        }
      </div>
    )
  }
}

var User = ({ next }) => (
  <div>
    <h3>User Information</h3>
    <form className="user">
      <div>
        <input id="name" type="text" placeholder="first and last name"/>
      </div>
      <div>
      <input id="email" type="text" placeholder="email address"/>
      </div>
      <div>
      <input id="password" type="text" placeholder="password"/>
      </div>
      <button id="user" onClick={next}>Next</button>
    </form>
  </div>
)

var Shipping = ({ next }) => (
  <div>
    <h3>Shipping Information</h3>
    <form className="shipping">
      <div>
        <input id="line1" type="text" placeholder="address.."/>
      </div>
      <div>
      <input id="line2" type="text" placeholder="address.."/>
      </div>
      <div>
      <input id="city" type="text" placeholder="city"/>
      </div>
      <div>
      <input id="state" type="text" placeholder="state"/>
      </div>
      <div>
      <input id="zipcode" type="text" placeholder="zipcode"/>
      </div>
      <button id="ship" onClick={next}>Next</button>
    </form>
  </div>
)

var Billing = ({ next }) => (
  <div>
    <h3>Billing Information</h3>
    <form className="billing">
      <div>
      <input id="credit-card" type="text" placeholder="credit card"/>
      </div>
      <div>
      <input id="expiry-date" type="text" placeholder="expiration date"/>
      </div>
      <div>
      <input id="CVV" type="text" placeholder="CVV"/>
      </div>
      <div>
      <input id="billing-zipcode" type="text" placeholder="billing zipcode"/>
      </div>
      <button>Next</button>
    </form>
  </div>
)

// class Confirmation extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   list
//     // };
//   }

//   render() {
//     return (
//       <div className="confirmation-page">
//         <h1>Information Summary</h1>
//         <button>Purchase</button>
//         <App />
//       </div>
//     )
//   }
// }

// at the end of components list -- render the app to the html view?
ReactDOM.render(<div>
  <App />
  </div>,
  document.getElementById('app'));

