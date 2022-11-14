import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../auth';
import NewButton from '../components/CMS/NewButton';
import { Member, Team } from '../models/team';

interface Props {
  teams: Team[];
  members: Member[];
}

const noImageIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

const CMS: React.FC<Props> = ({ teams, members }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <br />
      <div className="log-out">
        <button onClick={logOut}>Log Out</button>
      </div>
      <div className="new-section">
        <NewButton purpose="team" clicked={clicked} setClicked={setClicked} />
        <NewButton purpose="member" clicked={clicked} setClicked={setClicked} />
      </div>
      <div className="existing-teams">
        {teams.length > 0 && (
          <>
            <h3>Click to edit or delete a team</h3>
            <div>
              {teams.map((team) => (
                //FIX THIS
                <div key={team.teamId}>
                  <img
                    src={String(team.symbol) || noImageIcon}
                    alt="Team Symbol"
                    width={'150px'}
                  />
                  <h4>{team.shortTeamName}</h4>
                  <Link to={`/team/${team.teamId}`}>
                    <button>View</button>
                  </Link>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="existing-members">
        <h3>Click to edit or delete a member</h3>
      </div>
    </>
  );
};

export default CMS;
