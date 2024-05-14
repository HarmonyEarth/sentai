import React from "react";
import { useParams } from "react-router-dom";
import TeamFormSection from "../components/EditTeam/TeamFormSection";
import { Helmet } from "react-helmet-async";
import { siteFavIcon } from "../constants";
import { Team } from "../types";

interface Props {
  teams: Team[] | null;
  mobile: boolean;
}

const EditTeam: React.FC<Props> = ({ teams, mobile }) => {
  const { id } = useParams();

  if (!id) {
    return <h1>Document does not exist</h1>;
  }

  const currentTeam = teams?.find((element) => element.id === id);

  if (!currentTeam) {
    return <h1>Document does not exist</h1>;
  }

  return (
    <>
      <Helmet>
        <title>Edit Team: {currentTeam.fullTeamNameEN}</title>
        <link rel="icon" href={siteFavIcon} type="image/x-icon" sizes="16x16" />
      </Helmet>
      <TeamFormSection docId={id} currentTeam={currentTeam} mobile={mobile} />
    </>
  );
};

export default EditTeam;
