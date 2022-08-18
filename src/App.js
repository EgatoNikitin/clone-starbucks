import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className='container'>
        <div className='left-block'>
        </div>
        <div className='form-block'>
          <form className='login-form'>
            <span className='login-title'>
              Login to continue
            </span>
            <input className='input-email' type="email" placeholder='Email'></input>
            <input className='input-password' type="password" placeholder='Password'></input>
            <div className='form--container'>
              <label for="1"><input id='1' className='input-chek' type="checkbox" ></input>Remember me</label>
              <p className='forgot-pass'>Forgot Password?</p>
            </div>
            <button className='form-button' type='button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
