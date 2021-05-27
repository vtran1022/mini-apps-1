import React from 'react';

var Shipping = ({ next }) => (
  <div>
    <h3>Shipping Information</h3>
    <form className="shipping">
      <div>
        <input id="line1" type="text" placeholder="address line 1"/>
      </div>
      <div>
      <input id="line2" type="text" placeholder="address line 2"/>
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

export default Shipping;