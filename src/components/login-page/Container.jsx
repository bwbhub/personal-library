/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./container.css";

const Container = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`} id="container">
      <div className={`form-container sign-up ${isSignUp ? "active" : ""}`}>
        <form action="">
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`form-container sign-in ${isSignUp ? "" : "active"}`}>
        <form action="">
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password ?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div
            className={`toggle-panel toggle-left ${isSignUp ? "" : "hidden"}`}
          >
            <h1>Hello, Friend!</h1>
            <p>Already registered ? Click here to log back in</p>
            <button
              className={`${isSignUp ? "" : "hidden"}`}
              id="login"
              onClick={handleToggle}
            >
              Sign In
            </button>
          </div>
          <div
            className={`toggle-panel toggle-right ${isSignUp ? "hidden" : ""}`}
          >
            <h1>Hello, Friend!</h1>
            <p>
              You are new ? Register to fully enjoy the website features by
              clicking here
            </p>
            <button
              className={`${isSignUp ? "hidden" : ""}`}
              id="register"
              onClick={handleToggle}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
