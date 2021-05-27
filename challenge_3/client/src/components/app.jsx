import React from 'react';
import User from './user.jsx';
import Shipping from './shipping.jsx';
import Billing from './billing.jsx';
import Confirmation from './confirmation.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userComponent: false,
      shippingComponent: false,
      billingComponent: false,
      confirmationComponent: false,
      full_name: '',
      email: '',
      password: '',
      address_line1: '',
      address_line2: '',
      city: '',
      state: '',
      zipcode: '',
      credit_card: '',
      expiry_date: '',
      CVV: '',
      billing_zipcode: ''
    };

    this._onButton = this._onButton.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
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
    } else if (event.target.id === 'bill') {
      this.setState({
        billingComponent: false,
        confirmationComponent: true
      });
    // } else if (event.target.id === 'conf') {
    //   thi
    }
  }

  render() {
    const {
      userComponent,
      shippingComponent,
      billingComponent,
      confirmationComponent,
      full_name,
      email,
      password,
      address_line1,
      address_line2,
      city,
      state,
      zipcode,
      credit_card,
      expiry_date,
      CVV,
      billing_zipcode
    } = this.state;

    return (
      <div className="home-page">
        <h1>Checkout</h1>
        <button id="checkout" onClick={this._onButton}>Checkout</button>
        {userComponent
          ? <User
            next={this._onButton}
            change={this._handleChange}
            name={full_name}
            email={email}
            pw={password}
            />
          : null
        }
        {shippingComponent
          ? <Shipping
            next={this._onButton}
            change={this._handleChange}
            line1={address_line1}
            line2={address_line2}
            city={city}
            state={state}
            zip={zipcode}
            />
          : null
        }
        {billingComponent
          ? <Billing
            next={this._onButton}
            change={this._handleChange}
            cc={credit_card}
            exp={expiry_date}
            cvv={CVV}
            bzip={billing_zipcode}
            />
          : null
        }
        {confirmationComponent
          ? <Confirmation
            next={this._onButton}
            name={full_name}
            email={email}
            pw={password}
            line1={address_line1}
            line2={address_line2}
            city={city}
            state={state}
            zip={zipcode}
            cc={credit_card}
            exp={expiry_date}
            cvv={CVV}
            bzip={billing_zipcode}
            />
          : null
        }
      </div>
    )
  }
}


export default App;