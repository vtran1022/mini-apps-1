import React from 'react';

var Shipping = ({ next, change, line1, line2, city, state, zip }) => (
  <div>
    <h3>Shipping Information</h3>
    <form className="shipping">
      <div>
        <input id="address_line1" type="text" value={line1} onChange={change} placeholder="address line 1"/>
      </div>
      <div>
      <input id="address_line2" type="text" value={line2} onChange={change} placeholder="address line 2"/>
      </div>
      <div>
      <input id="city" type="text" value={city} onChange={change} placeholder="city"/>
      </div>
      <div>
      <input id="state" type="text" value={state} onChange={change} placeholder="state"/>
      </div>
      <div>
      <input id="zipcode" type="text" value={zip} onChange={change} placeholder="zipcode"/>
      </div>
      <button id="ship" onClick={next}>Next</button>
    </form>
  </div>
)

export default Shipping;