import "./LoginPage.css";
import { Banner } from "../componentns/Banner/Banner";
import { useState } from "react";
import {PasswordInput} from '../componentns/PasswordInput/PasswordInput'
import { SignInHeader } from "../componentns/SignInHeader/SignInHeader";
import { SignInFooter } from "../componentns/SignInFooter/SignInFooter";

const LoginPage = () => {
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
        <SignInHeader/>
      <div className="container">
      <span className="login-title">Sign in or create an account</span>
        <div className="form-block">
          <form className="login-form">
            <input
              className="input-email"
              type="email"
              placeholder="Email"
              value={emailValue}
              onChange={(e) => emailChangeHanlder(e.target.value)}
            ></input>
            {!emailValue && isSubmited && <Banner text="Please enter your email" type="error" />}
            <PasswordInput passwordValue={passwordValue} passwordChangeHanlder={passwordChangeHanlder}/>
            {!passwordValue && isSubmited && <Banner text="Please enter your password" type="error" />}
            <div className="form--container">
              <label htmlFor="1">
                <input id="1" className="input-chek" type="checkbox" checked={isChecked} onChange={checkHanlder}></input>
                Keep me signed in.
              </label>
              <p className="forgot-pass">Forgot your password?</p>
            </div>
            <button className="form-button" type="submit" onClick={(e)=>submitHandler(e)}>
              Sign in
            </button>
            {isSubmited && passwordValue && emailValue && <Banner text="You are logged into app" type="success" />}
          </form>
        </div>
      </div>
      <SignInFooter/>
    </div>
  );
};

export default LoginPage;
