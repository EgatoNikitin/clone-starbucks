import "./App.css";
import { Banner } from "./componentns/Banner/Banner";
import { useState } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState("" || localStorage.getItem('email'));
  const [passwordValue, setPasswordValue] = useState("" || localStorage.getItem('password'));
  const [isSubmited, setIsSubmited] = useState(false)
  const [isChecked, setIsChecked] = useState(false || !!localStorage.getItem('checked'));

  const emailChangeHanlder = (value) => {
    setIsSubmited(false)
    setEmailValue(value);
  };

  const passwordChangeHanlder = (value) => {
    setIsSubmited(false)
    setPasswordValue(value);
  };

  const submitHandler = (e)=>{
    setIsSubmited(true)
    e.preventDefault();
    if(isChecked){
      localStorage.setItem('email', emailValue);
      localStorage.setItem('password', passwordValue)
      localStorage.setItem('checked', isChecked)
    } else {
      localStorage.clear();
    }
  }

  const checkHanlder = () =>{
    setIsChecked(!isChecked)
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-block"></div>
        <div className="form-block">
          <form className="login-form">
            <span className="login-title">Login to continue</span>
            <input
              className="input-email"
              type="email"
              placeholder="Email"
              value={emailValue}
              onChange={(e) => emailChangeHanlder(e.target.value)}
            ></input>
            {!emailValue && isSubmited && <Banner text="Please enter your email" type="error" />}
            <input
              className="input-password"
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={(e)=>passwordChangeHanlder(e.target.value)}
            ></input>
            {!passwordValue && isSubmited && <Banner text="Please enter your password" type="error" />}
            <div className="form--container">
              <label htmlFor="1">
                <input id="1" className="input-chek" type="checkbox" checked={isChecked} onChange={checkHanlder}></input>
                Remember me
              </label>
              <p className="forgot-pass">Forgot Password?</p>
            </div>
            <button className="form-button" type="submit" onClick={(e)=>submitHandler(e)}>
              Login
            </button>
            {isSubmited && passwordValue && emailValue && <Banner text="You are logged into app" type="success" />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
