import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../api/auth';
import { Member, Team } from '../models/team';

interface Props {
  teams: Team[];
  members: Member[];
}

const CMS: React.FC<Props> = ({ teams, members }) => {
  return (
    <div>
      <br />
      <Link to={'/cms/add-team'}>
        <button>Add a team</button>
      </Link>
      {teams.length > 0 && (
        <Link to={'/cms/add-member'}>
          <button>Add a member</button>
        </Link>
      )}
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default CMS;
