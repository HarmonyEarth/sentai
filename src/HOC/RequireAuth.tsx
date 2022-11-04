import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../hooks/reduxTypedHooks';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const authStatus = useAppSelector((state) => state.user.value);

  let location = useLocation();

  if (!authStatus) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
