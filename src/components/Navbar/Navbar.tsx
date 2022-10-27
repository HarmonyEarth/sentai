import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxTypedHooks';
import { Container } from '../../styles/Navbar/Navbar.styles';
import LogInForm from './LogInForm';

const Navbar = () => {
  const authStatus = useAppSelector((state) => state.user.value);

  return (
    <Container>
      {authStatus ? <Link to={'/cms'}>CMS</Link> : <LogInForm />}
    </Container>
  );
};

export default Navbar;
