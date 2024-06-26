import React from "react";
import Grid from "@mui/material/Grid/Grid";
import { Link } from "react-router-dom";
import TeamCard from "./TeamCard";
import { Team } from "../../types";

interface Props {
  teams: Team[];
  mobile: boolean;
}

const TeamSection: React.FC<Props> = ({ teams, mobile }) => {
  return (
    <Grid container px={mobile ? undefined : 20}>
      {teams.map((team) => (
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          component={Link}
          to={`/${team.teamId}`}
          sx={{ textDecoration: "none" }}
          key={team.teamId}
        >
          <TeamCard
            logo={String(team.logo)}
            symbol={String(team.symbol)}
            year={Number(team.year)}
            shortTeamName={team.shortTeamName}
            mobile={mobile}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamSection;
