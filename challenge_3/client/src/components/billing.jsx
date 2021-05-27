import React from 'react';

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

export default Billing;