import React, { useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import useFileUpload from "../../hooks/useFileUpload";
import { FileState, Team } from "../../types";
import FormImage from "../CMS/FormImage";

import TeamForm from "./TeamForm";
import { Purpose } from "../../constants";

interface Props {
  docId: string;
  currentTeam: Team;
  mobile: boolean;
}

const TeamFormSection: React.FC<Props> = ({ docId, currentTeam, mobile }) => {
  const [logo, setLogo] = useState<FileState>();
  const [symbol, setSymbol] = useState<FileState>();
  const [teamData, setTeamData] = useState<Team>({
    ...currentTeam,
  });

  const logoPercent = useFileUpload({
    file: logo as File,
    setFile: setTeamData,
    fileId: Purpose.Logo,
    structure: Purpose.Team,
    docId,
  });
  const symbolPercent = useFileUpload({
    file: symbol as File,
    setFile: setTeamData,
    fileId: Purpose.Symbol,
    structure: Purpose.Team,
    docId,
  });

  return (
    <Grid container>
      <Grid container item>
        <Grid
          container
          item
          justifyContent="space-between"
          xs={12}
          md={6}
          p={3}
          textAlign="center"
        >
          <Grid item xs={6} md={3}>
            <FormImage
              mobile={mobile}
              firestoreImage={String(teamData.logo)}
              image={logo}
              imagePercent={logoPercent}
              imageName={Purpose.Logo}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <FormImage
              mobile={mobile}
              firestoreImage={String(teamData.symbol)}
              image={symbol}
              imagePercent={symbolPercent}
              imageName={Purpose.Symbol}
            />
          </Grid>
        </Grid>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item>
            <h4>Team Form</h4>
            <TeamForm
              symbolPercent={symbolPercent}
              logoPercent={logoPercent}
              setLogo={setLogo}
              setSymbol={setSymbol}
              setTeamData={setTeamData}
              teamData={teamData}
              docId={docId}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
