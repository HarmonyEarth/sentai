import React from "react";
import Grid from "@mui/material/Grid/Grid";
import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";
import Title from "./Title";
import { shuffle } from "../../utils/shuffle";
import { Member } from "../../types";

interface Props {
  members: Member[];
  mobile: boolean;
}

const HeroBanner: React.FC<Props> = ({ members, mobile }) => {
  const shuffledMembers = shuffle(structuredClone(members));

  return (
    <Grid container>
      <Grid container item xs={12} md={4}>
        {shuffledMembers.slice(0, mobile ? 3 : 2).map((shuffledMember) => (
          <Grid
            container
            item
            xs={4}
            md={4}
            key={shuffledMember.heroId}
            component={Link}
            to={`/${shuffledMember.teamId}/${shuffledMember.heroId}`}
          >
            <HeroCard
              heroImage2={String(shuffledMember.heroImage2)}
              heroNameEN2={shuffledMember.heroNameEN2}
              mobile={mobile}
            />
          </Grid>
        ))}
        {!mobile && (
          <Grid item xs={4}>
            <Title mobile={mobile} />
          </Grid>
        )}
      </Grid>

      {mobile && (
        <Grid item xs={12}>
          <Title mobile={mobile} />
        </Grid>
      )}
      <Grid container item xs={12} md={8}>
        {shuffledMembers.slice(mobile ? -4 : -6).map((shuffledMember) => (
          <Grid
            container
            item
            xs={3}
            md={2}
            key={shuffledMember.heroId}
            component={Link}
            to={`/${shuffledMember.teamId}/${shuffledMember.heroId}`}
          >
            <HeroCard
              heroImage2={String(shuffledMember.heroImage2)}
              heroNameEN2={shuffledMember.heroNameEN2}
              mobile={mobile}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
