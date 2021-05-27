import React from 'react';

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

export default User;