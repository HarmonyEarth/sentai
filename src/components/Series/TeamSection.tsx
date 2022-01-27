import { Grid } from "@mui/material";
import React from "react";
import TeamCard from "./TeamCard";

const list: number[] = [];
for (let i = 0; i < 11; i++) {
  list.push(i);
}

const symbol =
  "https://static.wikia.nocookie.net/powerrangers/images/4/4a/Icon-turboranger.png";
const shortTeamName = "Turboranger";
const year = 1989;
const logo =
  "https://static.wikia.nocookie.net/powerrangers/images/a/a0/Logo-turboranger.png";
const TeamSection = () => {
  return (
    <Grid container>
      {list.map(() => (
        <Grid item xs={12} sm={6} md={4}>
          <TeamCard
            logo={logo}
            symbol={symbol}
            year={year}
            shortTeamName={shortTeamName}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamSection;
