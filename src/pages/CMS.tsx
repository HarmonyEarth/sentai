import React from 'react';
import { Link } from 'react-router-dom';

const CMS = () => {
  return (
    <div>
      <Link to={'/cms/add'}>
        <button>Add a team</button>
      </Link>
    </div>
  );
};

export default CMS;
