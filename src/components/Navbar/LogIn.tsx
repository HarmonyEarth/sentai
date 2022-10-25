import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxTypedHooks';
import { logUserIn } from '../../rtk/slice/userSlice';

const LogIn = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/select');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  );
};

export default LogIn;
