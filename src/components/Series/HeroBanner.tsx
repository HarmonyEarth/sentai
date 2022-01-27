import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import HeroCard from "./HeroCard";
const list: number[] = [];
for (let i = 0; i < 10; i++) {
  list.push(i);
}
const img1 =
  "https://static.wikia.nocookie.net/powerrangers/images/6/63/Gokai-redsilver.png";
const img2 =
  "https://static.wikia.nocookie.net/powerrangers/images/5/58/Kirama-green.png";
const HeroBanner = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container>
      <Grid container item xs={12} md={4}>
        {list.slice(0, 3).map(() => (
          <Grid container item xs={4} sm={4}>
            <HeroCard heroImageUrl={img1} />
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={12} md={8}>
        {list.slice(mobile ? -4 : 4).map(() => (
          <Grid container item xs={3} sm={2}>
            <HeroCard heroImageUrl={img2} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
