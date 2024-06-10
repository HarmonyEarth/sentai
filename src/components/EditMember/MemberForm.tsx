import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid/Grid";
import { db } from "../../firebase";
import { FileState, Member, Team } from "../../types";
import FormInput from "../CMS/FormInput";
import FormSelect from "../CMS/FormSelect";
import replaceWithWEBP from "../../utils/replaceWithWEBP";
import {
  Collections,
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

  const handleMemberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;
    const file = files?.[0];

    const imageMap = {
      [Purpose.HeroImage1]: setHeroImage1,
      [Purpose.HeroImage2]: setHeroImage2,
      [Purpose.HeroImage3]: setHeroImage3,
      [Purpose.HeroImage4]: setHeroImage4,
      [Purpose.HeroHelmet]: setHeroHelmet,
      [Purpose.HeroSymbol]: setHeroSymbol,
    };

    if (file && imageMap[id as keyof typeof imageMap]) {
      replaceWithWEBP({
        filename: id,
        rawFile: file,
        setImage: imageMap[id as keyof typeof imageMap],
      });
    }

    setMemberData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleMemberSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setMemberData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const memberDoc = doc(db, Collections.Members, docId);
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

  const isUploadInProgress = [
    heroImage1Percent,
    heroImage2Percent,
    heroImage3Percent,
    heroImage4Percent,
    heroHelmetPercent,
    heroSymbolPercent,
  ].some((percent) => percent !== null && percent < 100);

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
      <button type="submit" disabled={isUploadInProgress}>
        Submit to Database
      </button>
    </form>
  );
};

export default MemberForm;
