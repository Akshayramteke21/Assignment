import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  function loginUser(e) {
    e.preventDefault();

  axios.get('')

  
  }

  return (
    <div className="container py-5 bg-success-subtle mt-5 w-50 h-100">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center text-uppercase ">
              <h2 className='fw-bold'>Student Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={loginUser}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="form-control"
                    id="password"
                    placeholder="Enter your Password"
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary mt-2">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
