import React from 'react';
import axios from 'axios';
import User from './user.jsx';
import Shipping from './shipping.jsx';
import Billing from './billing.jsx';
import Confirmation from './confirmation.jsx';
import Checkout from './checkout.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutComponent: true,
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
    this._addInfoToDB = this._addInfoToDB.bind(this);
  }

  _handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  _onButton(event) {
    event.preventDefault();
    if (event.target.id === 'checkout') {
      this.setState({
        checkoutComponent: false,
        userComponent: true
      });
    } else if (event.target.id === 'user') {
      this.setState({
        userComponent: false,
        shippingComponent: true
      });

      this._addInfoToDB();
    } else if (event.target.id === 'ship') {
      this.setState({
        shippingComponent: false,
        billingComponent: true
      });

      this._addInfoToDB();
    } else if (event.target.id === 'bill') {
      this.setState({
        billingComponent: false,
        confirmationComponent: true
      });

      this._addInfoToDB();
    } else if (event.target.id === 'conf') {
      this.setState({
        confirmationComponent: false,
        checkoutComponent: true,
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
      });
    }
  }

  _addInfoToDB() {
    if (this.state.userComponent) {
      axios.post('/checkout/users', {
        full_name: this.state.full_name,
        email: this.state.email,
        password: this.state.password
      })
        .then((response) => { console.log(response) })
        .catch((err) => { console.log(err) });
    } else if (this.state.shippingComponent) {
      axios.post('/checkout/shipping', {
        address_line1: this.state.address_line1,
        address_line2: this.state.address_line2,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
      })
        .then((response) => { console.log(response) })
        .catch((err) => { console.log(err) });
    } else if (this.state.billingComponent) {
      axios.post('/checkout/billing', {
        credit_card: this.state.credit_card,
        expiry_date: this.state.expiry_date,
        CVV: this.state.CVV,
        billing_zipcode: this.state.billing_zipcode
      })
        .then((response) => { console.log(response) })
        .catch((err) => { console.log(err) });
    }
  }


  render() {
    const {
      checkoutComponent,
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
        {checkoutComponent
          ? <Checkout
            next={this._onButton}
            />
          : null
        }
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