import React from 'react';
import './App.css'; // استيراد ملف CSS لتنسيق العناصر

function App() {
  return (
    <div className="app-container">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Page</title>
      <link rel="stylesheet" href="App.css" /> 
      <div className="container">
        <div className="left-section">
          <img src="/Users/doaa/Desktop/ass/logg/src/im.png" alt="Login Image" />
        </div>
        <div className="right-section">
          <h4>
            <img src="/Users/doaa/Desktop/ass/logg/src/imm.png" className="avatar" />
            UI Unicorn
          </h4>
          <h4>Nice to see you again</h4>
          <form id="loginForm" className="form">
            <div className="input-group">
              <label htmlFor="emailPhone">Login</label>
              <input type="text" id="emailPhone" name="emailPhone" required="" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required="" />
              <div className="links">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <div className="input-group">
              <button type="submit">Sign in</button>
            </div>
          </form>
          <div className="signup">
            <h6>
              Don't have an account?{" "}
              <span>
                <a href="#">Sign up now</a>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
