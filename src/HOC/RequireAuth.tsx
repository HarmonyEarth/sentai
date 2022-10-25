import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { trackAuthStatus } from '../api/auth';
import { useAppDispatch, useAppSelector } from '../hooks/reduxTypedHooks';
import { logUserIn, logUserOut } from '../rtk/slice/userSlice';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const authStatus = useAppSelector((state) => state.user.isLoggedIn);
  const dispatch = useAppDispatch();

  let location = useLocation();

  useEffect(() => {
    trackAuthStatus((user) => {
      if (user) {
        console.log('User is available');
        dispatch(logUserIn);
      } else {
        console.log('User is not available');
        dispatch(logUserOut);
      }
    });
  }, [dispatch]);

  if (!authStatus) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
