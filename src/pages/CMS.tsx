import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../api/auth';

const CMS = () => {
  return (
    <div>
      <Link to={'/cms/add'}>
        <button>Add a team</button>
      </Link>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default CMS;
