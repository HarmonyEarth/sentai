import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxTypedHooks';
import {
  LeftNavbar,
  NavbarFlexContainer,
  NavbarHeader,
  RightNavbar,
} from '../../styles/Navbar/Navbar.styles';
import LogInForm from './LogInForm';
import { logOut } from '../../auth';

const Navbar = () => {
  const authStatus = useAppSelector((state) => state.user.value);
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <NavbarHeader>
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
            (location.pathname !== '/cms' && (
              <Link to={'/cms'}>
                <button>CMS</button>
              </Link>
            )) ||
            (location.pathname === '/cms' && (
              <button onClick={logOut}>Log Out</button>
            ))
          ) : (
            <LogInForm />
          )}
          <button>Play</button>
        </RightNavbar>
      </NavbarFlexContainer>
    </NavbarHeader>
  );
};

export default Navbar;
