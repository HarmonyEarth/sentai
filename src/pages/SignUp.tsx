import React, { useState } from 'react';
import { signUp } from '../api/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const handleClick = (e: React.SyntheticEvent) => {
    signUp(email, password);
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <h1>Sign Up</h1>
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

export default SignUp;
