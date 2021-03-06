import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";

import turbo from "../../assets/data";

const list: number[] = [];
for (let i = 0; i < 10; i++) {
  list.push(i);
}
const blackTurbo = turbo.teamMembers[0];
const blueTurbo = turbo.teamMembers[1];

const HeroBanner = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container>
      <Grid container item xs={12} md={4}>
        {list.slice(0, 3).map((item) => (
          <Grid container item xs={4} sm={4} key={list[item]}>
            <HeroCard
              heroImage2Url={blackTurbo.heroImage2Url}
              to={`/hero/${blackTurbo.heroId}`}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} md={8}>
        {list.slice(mobile ? -4 : 4).map((item) => (
          <Grid container item xs={3} sm={2} key={list[item]}>
            <HeroCard
              heroImage2Url={blueTurbo.heroImage2Url}
              to={`/hero/${blueTurbo.heroId}`}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
