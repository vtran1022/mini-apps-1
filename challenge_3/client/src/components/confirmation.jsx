import React from 'react';

var Confirmation = ({ next, name, email, pw, line1, line2, city, state, zip, cc, exp, cvv, bzip }) => (
  <div>
    <h2>Summary Confirmation</h2>
    <label>User</label>
    <p>{name}</p>
    <p>{email}</p>
    <p>{pw}</p>
    <label>Shipping</label>
    <p>{line1}</p>
    <p>{line2}</p>
    <p>{city}</p>
    <p>{state}</p>
    <p>{zip}</p>
    <label>Billing</label>
    <p>{cc}</p>
    <p>{exp}</p>
    <p>{cvv}</p>
    <p>{bzip}</p>
    <button>Purchase</button>
  </div>
)

export default Confirmation;