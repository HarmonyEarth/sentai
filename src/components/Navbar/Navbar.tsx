import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxTypedHooks';
import {
  Container,
  LeftNavbar,
  NavbarFlexContainer,
  RightNavbar,
} from '../../styles/Navbar/Navbar.styles';
import LogInForm from './LogInForm';

const Navbar = () => {
  const authStatus = useAppSelector((state) => state.user.value);
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <NavbarFlexContainer>
        <LeftNavbar>
          <Link to={'/'}>
            <button>Home</button>
          </Link>
          {location.pathname !== '/' && (
            <button onClick={() => navigate(-1)}>Back</button>
          )}
        </LeftNavbar>
        <RightNavbar>
          {authStatus ? (
            <Link to={'/cms'}>
              <button>CMS</button>
            </Link>
          ) : (
            <LogInForm />
          )}
          <a
            href="https://github.com/HarmonyEarth/sentai"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </RightNavbar>
      </NavbarFlexContainer>
    </Container>
  );
};

export default Navbar;
