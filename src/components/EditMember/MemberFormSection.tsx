import React, { useState } from "react";
import Grid from "@mui/material/Grid/Grid";
import useFileUpload from "../../hooks/useFileUpload";
import { FileState, Member, ScreenSizesType, Team } from "../../types";
import MemberForm from "./MemberForm";
import { HeroDetailsContainer } from "../../styles/HeroDetails/HeroDetails.styles";
import HeroBackground from "../HeroDetails/HeroBackground";
import { heroColor } from "../../utils/heroColor";
import HeroesBar from "../HeroesBar/HeroesBar";
import { HeroContent } from "../HeroDetails/HeroContent";
import ScrollToTop from "../HeroDetails/ScrollToTop";

interface Props {
  docId: string;
  currentMember: Member;
  teams: Team[];
  mobile: boolean;
  screenSizes: ScreenSizesType;
}

const MemberFormSection: React.FC<Props> = ({
  docId,
  currentMember,
  teams,
  mobile,
  screenSizes,
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
    fileId: "heroImage1",
    structure: "member",
    docId,
  });

  const heroImage2Percent = useFileUpload({
    file: heroImage2 as File,
    setFile: setMemberData,
    fileId: "heroImage2",
    structure: "member",
    docId,
  });

  const heroImage3Percent = useFileUpload({
    file: heroImage3 as File,
    setFile: setMemberData,
    fileId: "heroImage3",
    structure: "member",
    docId,
  });

  const heroImage4Percent = useFileUpload({
    file: heroImage4 as File,
    setFile: setMemberData,
    fileId: "heroImage4",
    structure: "member",
    docId,
  });

  const heroHelmetPercent = useFileUpload({
    file: heroHelmet as File,
    setFile: setMemberData,
    fileId: "heroHelmet",
    structure: "member",
    docId,
  });

  const heroSymbolPercent = useFileUpload({
    file: heroSymbol as File,
    setFile: setMemberData,
    fileId: "heroSymbol",
    structure: "member",
    docId,
  });

  return (
    <>
      <ScrollToTop />
      <Grid container sx={{ backgroundColor: "white" }}>
        <Grid
          container
          item
          justifyContent="space-around"
          alignItems={"center"}
          xs={12}
        >
          <Grid item>
            <h4>Member Form</h4>
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
      </Grid>
      <HeroDetailsContainer>
        <HeroBackground
          heroImage1={String(memberData.heroImage1)}
          color={heroColor(memberData.color)}
          mobile={mobile}
        />
        <HeroesBar
          heroSymbol={String(memberData.heroSymbol)}
          heroNameEN1={memberData.heroNameEN1}
          heroNameEN2={memberData.heroNameEN2}
          mobile={mobile}
        />
        <HeroContent
          heroImage3={String(memberData.heroImage3)}
          heroImage4={String(memberData.heroImage4)}
          heroNameEN1={memberData.heroNameEN1}
          heroNameEN2={memberData.heroNameEN2}
          heroNameJP1={memberData.heroNameJP1}
          heroNameJP2={memberData.heroNameJP2}
          locationEN={memberData.locationEN}
          locationJP={memberData.locationJP}
          locationImage={memberData.locationImage}
          mobile={mobile}
          screenSizes={screenSizes}
        />
      </HeroDetailsContainer>
    </>
  );
};

export default MemberFormSection;
