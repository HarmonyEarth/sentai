import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { FileState, Member, Team } from "../../types";
import FormInput from "../CMS/FormInput";
import FormSelect from "../CMS/FormSelect";
import Grid from "@mui/material/Grid/Grid";
import replaceWithWEBP from "../../utils/replaceWithWEBP";
import {
  Purpose,
  memberInputColorData,
  memberInputData,
  memberInputFileData,
  memberInputImageLocation,
  memberInputNameLocationData,
} from "../../constants";

interface Props {
  setHeroImage1: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroImage2: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroImage3: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroImage4: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroHelmet: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroSymbol: React.Dispatch<React.SetStateAction<FileState>>;
  setMemberData: React.Dispatch<React.SetStateAction<Member>>;
  memberData: Member;
  heroImage1Percent: number | null;
  heroImage2Percent: number | null;
  heroImage3Percent: number | null;
  heroImage4Percent: number | null;
  heroHelmetPercent: number | null;
  heroSymbolPercent: number | null;
  docId: string;
  teams: Team[];
}

const MemberForm: React.FC<Props> = ({
  setHeroImage1,
  setHeroImage2,
  setHeroImage3,
  setHeroImage4,
  setHeroHelmet,
  setHeroSymbol,
  setMemberData,
  memberData,
  heroImage1Percent,
  heroImage2Percent,
  heroImage3Percent,
  heroImage4Percent,
  heroHelmetPercent,
  heroSymbolPercent,
  docId,
  teams,
}) => {
  const navigate = useNavigate();

  console.log(memberData);

  const handleMemberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    const file =
      e.target.files && e.target.files.length !== 0 && e.target.files[0];

    if (id === Purpose.HeroImage1 && file) {
      replaceWithWEBP({
        filename: id,
        rawFile: file,
        setImage: setHeroImage1,
      });
    } else if (id === Purpose.HeroImage2 && file) {
      replaceWithWEBP({
        filename: id,
        rawFile: file,
        setImage: setHeroImage2,
      });
    } else if (id === Purpose.HeroImage3 && file) {
      replaceWithWEBP({
        filename: id,
        rawFile: file,
        setImage: setHeroImage3,
      });
    } else if (id === Purpose.HeroImage4 && file) {
      replaceWithWEBP({
        filename: id,
        rawFile: file,
        setImage: setHeroImage4,
      });
    } else if (id === Purpose.HeroHelmet && file) {
      replaceWithWEBP({
        filename: id,
        rawFile: file,
        setImage: setHeroHelmet,
      });
    } else if (id === Purpose.HeroSymbol && file) {
      replaceWithWEBP({
        filename: id,
        rawFile: file,
        setImage: setHeroSymbol,
      });
    }
    setMemberData({ ...memberData, [id]: value });
  };

  const handleMemberSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const id = e.target.id;
    const value = e.target.value;

    setMemberData({ ...memberData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const memberDoc = doc(db, "members", docId);
    try {
      toast.loading("Sending updates to database...");
      await updateDoc(memberDoc, {
        ...memberData,
      });
      toast.dismiss();
      toast.success(`Successfully updated ${memberData.heroNameEN1}!`);
      navigate("/cms");
    } catch (err) {
      console.log("error", err);
      toast.dismiss();
      toast.error("Failed to update!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          {memberInputData.map((memberFormData) => {
            let memberInput =
              memberFormData.formData as keyof typeof memberData;
            return (
              <FormInput
                key={memberFormData.formData}
                placeholder={String(memberFormData.placeholder) ?? ""}
                teamFormData={memberFormData.formData}
                type={memberFormData.type}
                id={memberFormData.formData}
                readonly={false}
                handleInput={handleMemberInput}
                defaultValue={String(memberData[memberInput])}
              />
            );
          })}
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormSelect
            arrayData={memberInputColorData}
            handleMemberSelect={handleMemberSelect}
            purpose={Purpose.Color}
            optionPreview={(color) => color}
            getKey={(color) => color}
            getValue={(color) => color}
            originalValue={memberData.color}
          />

          <FormSelect
            arrayData={teams}
            handleMemberSelect={handleMemberSelect}
            purpose={Purpose.TeamId}
            getKey={(team) => team.id}
            optionPreview={(team) => team.shortTeamName}
            getValue={(team) => team.teamId}
            originalValue={memberData.teamId}
          />

          <FormSelect
            arrayData={memberInputNameLocationData}
            handleMemberSelect={handleMemberSelect}
            purpose={Purpose.LocationEN}
            getKey={(location) => location.name}
            optionPreview={(location) => location.display}
            getValue={(location) => location.name}
            originalValue={memberData.locationEN}
          />

          <FormSelect
            arrayData={memberInputNameLocationData}
            handleMemberSelect={handleMemberSelect}
            purpose={Purpose.LocationJP}
            getKey={(location) => location.name}
            optionPreview={(location) => location.display}
            getValue={(location) => location.name}
            originalValue={memberData.locationJP}
          />
          <FormSelect
            arrayData={memberInputImageLocation}
            handleMemberSelect={handleMemberSelect}
            purpose={Purpose.LocationImage}
            getKey={(location) => location.imageLocationName}
            optionPreview={(location) => location.imageLocationName}
            getValue={(location) => location.imageLocationName}
            originalValue={memberData.locationImage}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          {memberInputFileData.map((memberInputFile) => (
            <FormInput
              key={memberInputFile.formData}
              teamFormData={memberInputFile.formData}
              type={memberInputFile.type}
              id={memberInputFile.formData}
              readonly={false}
              handleInput={handleMemberInput}
              accept={memberInputFile.accept ?? ""}
            />
          ))}
        </Grid>
      </Grid>
      <br />
      <button
        type="submit"
        disabled={
          (heroImage1Percent !== null && heroImage1Percent < 100) ||
          (heroImage2Percent !== null && heroImage2Percent < 100) ||
          (heroImage3Percent !== null && heroImage3Percent < 100) ||
          (heroImage4Percent !== null && heroImage4Percent < 100) ||
          (heroHelmetPercent !== null && heroHelmetPercent < 100) ||
          (heroSymbolPercent !== null && heroSymbolPercent < 100)
        }
      >
        Submit to Database
      </button>
    </form>
  );
};

export default MemberForm;
