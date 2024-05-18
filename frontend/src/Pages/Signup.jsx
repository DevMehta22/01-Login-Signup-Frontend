import React from "react";
import "./Signup.css";

const Signup = ()=>{
    return(
        <div className="container1">
      <form action="#">
        <div className="form-group">
          <label htmlFor="username">Email Id:</label>
          <input
            type="email"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="role"
                value="admin"
              />
              Admin
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="user"
              />
              User
            </label>
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    )
}

export default Signup