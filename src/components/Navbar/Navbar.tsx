import React from 'react';
import { logOut } from '../../api/auth';
import { Container } from '../../styles/Navbar/Navbar.styles';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <Container>
      <NavItem />
      <button onClick={logOut}>Log Out</button>
    </Container>
  );
};

export default Navbar;
