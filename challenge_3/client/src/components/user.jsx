import React from 'react';

var User = ({ next, change, name, email, pw }) => (
  <div>
    <h3>User Information</h3>
    <form className="user">
      <div>
        <input id="full_name" type="text" value={name} onChange={change} placeholder="first and last name"/>
      </div>
      <div>
      <input id="email" type="text" value={email} onChange={change} placeholder="email address"/>
      </div>
      <div>
      <input id="password" type="text" value={pw} onChange={change} placeholder="password"/>
      </div>
      <button id="user" onClick={next}>Next</button>
    </form>
  </div>
)

export default User;