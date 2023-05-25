import { Grid, Modal } from '@mui/material';
import React, { useState } from 'react';
import { logIn } from '../../auth';
import { LogInContainer } from '../../styles/Navbar/LogInForm.styles';

const LogInForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => true);
  const handleClose = () => setOpen((prev) => false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logInFormId = document.getElementById(
    'logInFormElementId'
  ) as HTMLFormElement;

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await logIn({ email, password });
      logInFormId.reset();
    } catch (err) {
      console.log('error', err);
    }
  };
  return (
    <>
      <button onClick={handleOpen}>Log In</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LogInContainer>
          <div>
            <h2>Log In Form</h2>
            <Grid container>
              <form id="logInFormElementId" onSubmit={handleSubmit}>
                <Grid item xs={12}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="fiveman@chikyuu.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </Grid>
                <br />
                <button type="submit">Log In</button>
              </form>
            </Grid>
          </div>
        </LogInContainer>
      </Modal>
    </>
  );
};

export default LogInForm;
