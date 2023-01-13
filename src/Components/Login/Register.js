import React from 'react';
import './Login.css';
import logo from '../Img/logo.gif';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <>
      <div className="Login-box">
        <img src={logo}></img>
        <h1 className="Login-box__header">Register</h1>
        <form>
          <div className="Login-box__form-content">
            <label for="username">Full Name</label>
            <br></br>
            <input id="username"></input>
          </div>
          <div className="Login-box__form-content">
            <label for="email" type="email">
              E-mail
            </label>
            <br></br>
            <input id="password"></input>
          </div>
          <div className="Login-box__form-content">
            <label for="password">Password</label>
            <br></br>
            <input id="password"></input>
          </div>
          <div className="Login-box__form-content">
            <label for="C-password">Confirm password</label>
            <br></br>
            <input id="C-password"></input>
          </div>

          <Link to="/">
            <button className="btn-login">Register</button>
            <p className="text-login">
              Already have account ? <a href="#">Login</a>
            </p>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
