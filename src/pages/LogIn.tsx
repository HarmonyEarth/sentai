import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const navigate = useNavigate();
  const handleClick = (e: React.SyntheticEvent) => {
    logIn(email, password);
    e.preventDefault();
    navigate('/');
  };
  return (
    <div>
      <form>
        <h1>Log In</h1>
        <label>Email</label>
        <input
          type="email"
          placeholder="fiveman@chikyuu.com"
          value={email}
          onChange={handleEmailChange}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
