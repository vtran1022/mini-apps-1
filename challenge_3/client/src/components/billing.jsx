import React from 'react';

var Billing = ({ next, change, cc, exp, cvv, bzip }) => (
  <div>
    <h3>Billing Information</h3>
    <form className="billing">
      <div>
      <input id="credit_card" type="text" value={cc} onChange={change} placeholder="credit card"/>
      </div>
      <div>
      <input id="expiry_date" type="text" value={exp} onChange={change} placeholder="expiration date"/>
      </div>
      <div>
      <input id="CVV" type="text" value={cvv} onChange={change} placeholder="CVV"/>
      </div>
      <div>
      <input id="billing_zipcode" type="text" value={bzip} onChange={change} placeholder="billing zipcode"/>
      </div>
      <button id="bill" onClick={next}>Next</button>
    </form>
  </div>
)

export default Billing;