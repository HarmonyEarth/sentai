import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/CMS/DeleteButton';
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
    <Grid container>
      <Grid container item spacing={2}>
        <Grid item xs={6}>
          <br />
          <NewButton purpose="team" clicked={clicked} setClicked={setClicked} />
        </Grid>
        <Grid item>
          <br />
          <NewButton
            purpose="member"
            clicked={clicked}
            setClicked={setClicked}
          />
        </Grid>
      </Grid>
      {teams.length > 0 && (
        <Grid container item>
          <Grid item xs={12}>
            <h3>Click to edit or delete a team</h3>
          </Grid>
          {teams.map((team) => (
            <Grid item key={team.id} xs={12} sm={4} md={3} marginTop={2}>
              <img
                src={String(team.symbol) || noImageIcon}
                alt={`${team.shortTeamName} Symbol`}
                height={'150px'}
              />
              <h4>{team.shortTeamName}</h4>
              <Link to={`/team/${team.teamId}`}>
                <button>View</button>
              </Link>
              <Link to={`/cms/team/${team.id}`}>
                <button>Edit</button>
              </Link>
              <DeleteButton
                clicked={clicked}
                setClicked={setClicked}
                docId={team.id}
                purpose={'team'}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {members.length > 0 && (
        <Grid container item>
          <Grid item xs={12}>
            <h3>Click to edit or delete a member</h3>
          </Grid>
          {members.map((member) => (
            //FIX THIS
            <Grid item key={member.id} xs={12} sm={4} md={3} marginTop={2}>
              <img
                src={String(member.heroImage1) || noImageIcon}
                alt={`${member.heroNameEN1}`}
                height={'150px'}
              />
              <h4>{member.heroNameEN1}</h4>
              <Link to={`/${member.teamId}/${member.heroId}`}>
                <button>View</button>
              </Link>
              <Link to={`/cms/member/${member.id}`}>
                <button>Edit</button>
              </Link>
              <DeleteButton
                clicked={clicked}
                setClicked={setClicked}
                docId={member.id}
                purpose={'member'}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default CMS;
