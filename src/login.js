import React, { useState } from 'react';
//import axios from 'axios'
import './login.css';


function Login({ onLogin }) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password2');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform login operation with username and password
//     // If login is successful, call onLogin with the user object
//   };

// const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('/api/login', {
//         username,
//         password,
//       });
//       const user = response.data;
//       onLogin(user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

const validCredentials = [
    { username: 'user1', password: 'password1' },
    { username: 'admin', password: 'password2' },
  ];
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const matchingCredential = validCredentials.find(
        (credential) => credential.username === username && credential.password === password
      );
      if (matchingCredential) {
        onLogin(matchingCredential);
      } else {
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    
    <div className="login-container">
    <form id="loginform" onSubmit={handleSubmit}>
      <label className='loginlabel'>
        Username:
        <input classname="logininput" type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label className='loginlabel'>
        Password:
        <input classname="logininput" type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button id="loginbutton" type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;
