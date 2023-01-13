import React from 'react';
import './Login.css';
import logo from '../Img/logo.gif';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
      <div className="Login-box">
        <img src={logo}></img>
        <h1 className="Login-box__header">Login</h1>
        <form>
          <div className="Login-box__form-content">
            <label for="username">Username</label>
            <br></br>
            <input id="username"></input>
          </div>
          <div className="Login-box__form-content">
            <label for="password">Password</label>
            <br></br>
            <input id="password"></input>
          </div>
          <Link to="/feed">
            <button className="btn-login">Login</button>
          </Link>
          <Link to="/Register">
            {' '}
            <p className="text-login">
              Don't have account <a href="#">Register</a>
            </p>
          </Link>
        </form>
      </div>
    </>
  );
}
export default Login;
