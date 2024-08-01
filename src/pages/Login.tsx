import React, { useState } from 'react';
import '../styles/Login.css';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const Buttoncolor = grey[50];

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const PasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your login logic here    
  };

  return (
    <div className="login-container">
      <div className="left-side"></div>
      <div className="right-side">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 >Sige In</h2>
          <div className="form-group">
            <label htmlFor="username">บัญชีผู้ใช้งาน (Username)</label>
            <div className="input-container">
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <i className="icon">📧</i>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">รหัสผ่าน (Password)</label>
            <div className="input-container">
              <input
                type="password"
                id="password"
                value={password}
                onChange={PasswordChange}
                required
              />
              <i className="icon">🔒</i>
            </div>
          </div>
          <button type="submit" className="login-button" color='#f4f6f5'>Login</button>
          <div className="register-container">
            <Button href="/register" size="large" style={{ color: Buttoncolor }} className='register-button' >Register</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

