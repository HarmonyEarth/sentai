import React, { useMemo, useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import { Link } from "react-router-dom";
import DeleteButton from "../components/CMS/DeleteButton";
import NewButton from "../components/CMS/NewButton";
import { Purpose, noImageIcon, siteFavIcon } from "../constants";
import { sortMembersByYear } from "../utils/sortMembersByYear";
import { Helmet } from "react-helmet-async";
import LazyImage from "../components/Loading/LazyImage";
import { Member, Team } from "../types";

interface Props {
  teams: Team[] | null;
  members: Member[] | null;
}

const CMS: React.FC<Props> = ({ teams, members }) => {
  const [clicked, setClicked] = useState(false);

  const membersByYear = useMemo(
    () => (members && teams ? sortMembersByYear({ members, teams }) : []),
    [members, teams]
  );

  return (
    <>
      <Helmet>
        <title>CMS</title>
        <link rel="icon" href={siteFavIcon} type="image/x-icon" sizes="16x16" />
      </Helmet>
      <Grid container spacing={2} mt={0.1} pt={4} mb={3}>
        <Grid item>
          <NewButton
            purpose={Purpose.Team}
            clicked={clicked}
            setClicked={setClicked}
          />
        </Grid>
        <Grid item>
          <NewButton
            purpose={Purpose.Member}
            clicked={clicked}
            setClicked={setClicked}
          />
        </Grid>
      </Grid>

      {teams?.map((team) => (
        <Grid container mb={5} spacing={1} alignItems={"center"}>
          <Grid
            item
            key={team.id}
            marginTop={2}
            xs={12}
            sm={4}
            textAlign={"center"}
          >
            <LazyImage
              src={String(team.symbol) || noImageIcon}
              alt={`${team.shortTeamName} Symbol`}
              height={"120px"}
            />
            <h3>{`${team.year} ${team.shortTeamName}`}</h3>
            <Link to={`/${team.teamId}`}>
              <button>View</button>
            </Link>
            <Link to={`/cms/team/${team.id}`}>
              <button>Edit</button>
            </Link>
            <DeleteButton
              clicked={clicked}
              setClicked={setClicked}
              docId={team.id}
              purpose={Purpose.Team}
            />
          </Grid>
          <Grid
            container
            item
            direction={"row"}
            xs={12}
            sm={8}
            textAlign={"center"}
          >
            <Grid item xs={12}>
              <h2>{team.shortTeamName} Members</h2>
            </Grid>
            {membersByYear
              .filter((member) => member.teamId === team.teamId)
              .map((member) => (
                <Grid
                  item
                  key={member.id}
                  marginTop={2}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <LazyImage
                    src={String(member.heroImage1) || noImageIcon}
                    alt={`${member.heroNameEN1}`}
                    height={"130px"}
                  />
                  <h4>{member.heroNameEN1}</h4>
                  {member.teamId && (
                    <Link to={`/${member.teamId}/${member.heroId}`}>
                      <button>View</button>
                    </Link>
                  )}
                  <Link to={`/cms/member/${member.id}`}>
                    <button>Edit</button>
                  </Link>
                  <DeleteButton
                    clicked={clicked}
                    setClicked={setClicked}
                    docId={member.id}
                    purpose={Purpose.Member}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CMS;
