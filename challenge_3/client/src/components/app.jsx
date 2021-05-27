import React from 'react';
import User from './user.jsx';
import Shipping from './shipping.jsx';
import Billing from './billing.jsx';


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


export default App;