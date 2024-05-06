import React, { useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import useFileUpload from "../../hooks/useFileUpload";
import { FileState, Member, Team } from "../../types";
import MemberForm from "./MemberForm";
import { Purpose } from "../../constants";
import { PreviewHeroDetails } from "../../pages/HeroDetails";

interface Props {
  docId: string;
  currentMember: Member;
  teams: Team[];
  mobile: boolean;
}

const MemberFormSection: React.FC<Props> = ({
  docId,
  currentMember,
  teams,
  mobile,
}) => {
  const [heroImage1, setHeroImage1] = useState<FileState>();
  const [heroImage2, setHeroImage2] = useState<FileState>();
  const [heroImage3, setHeroImage3] = useState<FileState>();
  const [heroImage4, setHeroImage4] = useState<FileState>();
  const [heroHelmet, setHeroHelmet] = useState<FileState>();
  const [heroSymbol, setHeroSymbol] = useState<FileState>();
  const [memberData, setMemberData] = useState<Member>({
    ...currentMember,
  });

  const heroImage1Percent = useFileUpload({
    file: heroImage1 as File,
    setFile: setMemberData,
    fileId: Purpose.HeroImage1,
    structure: Purpose.Member,
    docId,
  });

  const heroImage2Percent = useFileUpload({
    file: heroImage2 as File,
    setFile: setMemberData,
    fileId: Purpose.HeroImage2,
    structure: Purpose.Member,
    docId,
  });

  const heroImage3Percent = useFileUpload({
    file: heroImage3 as File,
    setFile: setMemberData,
    fileId: Purpose.HeroImage3,
    structure: Purpose.Member,
    docId,
  });

  const heroImage4Percent = useFileUpload({
    file: heroImage4 as File,
    setFile: setMemberData,
    fileId: Purpose.HeroImage4,
    structure: Purpose.Member,
    docId,
  });

  const heroHelmetPercent = useFileUpload({
    file: heroHelmet as File,
    setFile: setMemberData,
    fileId: Purpose.HeroHelmet,
    structure: Purpose.Member,
    docId,
  });

  const heroSymbolPercent = useFileUpload({
    file: heroSymbol as File,
    setFile: setMemberData,
    fileId: Purpose.HeroSymbol,
    structure: Purpose.Member,
    docId,
  });

  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        alignItems={"center"}
        sx={{ backgroundColor: "white" }}
      >
        <Grid item>
          <h3>Member Form</h3>
          <MemberForm
            setHeroImage1={setHeroImage1}
            setHeroImage2={setHeroImage2}
            setHeroImage3={setHeroImage3}
            setHeroImage4={setHeroImage4}
            setHeroHelmet={setHeroHelmet}
            setHeroSymbol={setHeroSymbol}
            setMemberData={setMemberData}
            memberData={memberData}
            heroImage1Percent={heroImage1Percent}
            heroImage2Percent={heroImage2Percent}
            heroImage3Percent={heroImage3Percent}
            heroImage4Percent={heroImage4Percent}
            heroHelmetPercent={heroHelmetPercent}
            heroSymbolPercent={heroSymbolPercent}
            docId={docId}
            teams={teams}
          />
        </Grid>
      </Grid>
      <PreviewHeroDetails currentMember={memberData} mobile={mobile} />
    </>
  );
};

export default MemberFormSection;
