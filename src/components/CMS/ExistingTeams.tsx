import React from 'react';
import { Link } from 'react-router-dom';
import { Team } from '../../models/team';

interface Props {
  teams: Team[];
  noImageIcon: string;
}

const ExistingTeams: React.FC<Props> = ({ teams, noImageIcon }) => {
  return (
    <>
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
                <Link to={`/cms/team/${team.id}`}>
                  <button>Edit</button>
                </Link>
                <button>Delete</button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ExistingTeams;
