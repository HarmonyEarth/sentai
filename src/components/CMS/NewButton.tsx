import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { Collections, Purpose } from "../../constants";

interface Props {
  purpose: Purpose;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewButton: React.FC<Props> = ({ purpose, clicked, setClicked }) => {
  const navigate = useNavigate();

  const today = new Date();
  let month = today.getMonth();
  const dayOfMonth = today.getDate();
  const thisYear = today.getFullYear();

  const newTeamName = `New Team - ${dayOfMonth}/${month + 1}/${thisYear}`;
  const newMemberName = `New Member - ${dayOfMonth}/${month + 1}/${thisYear}`;

  const handleClick = async () => {
    if (purpose === Purpose.Member) {
      try {
        setClicked((prev) => true);
        toast.loading("Loading New Member...");
        const { id } = await addDoc(collection(db, Collections.Members), {
          heroId: "",
          color: "",
          position: "",
          heroNameEN1: newMemberName,
          heroNameEN2: "",
          heroNameJP1: "",
          heroNameJP2: "",
          heroImage1: "",
          heroImage2: "",
          heroImage3: "",
          heroImage4: "",
          heroHelmet: "",
          heroSymbol: "",
          teamId: "",
          id: "",
          locationEN: "",
          locationJP: "",
        });
        toast.dismiss();
        toast.success("Successfully created New Member!");
        navigate(`/cms/member/${id}`);
      } catch (err) {
        console.log("error", err);
        toast.dismiss();
        toast.error("Failed to create New Member!");
      } finally {
        setClicked((prev) => false);
      }
    }
    if (purpose === Purpose.Team) {
      try {
        setClicked((prev) => true);
        toast.loading("Loading New Team...");
        const { id } = await addDoc(collection(db, Collections.Teams), {
          shortTeamName: newTeamName,
          fullTeamNameEN: "",
          fullTeamNameJP: "",
          year: "",
          logo: "",
          symbol: "",
          teamId: "",
          id: "",
        });
        toast.dismiss();
        toast.success("Successfully created New Team!");
        navigate(`/cms/team/${id}`);
      } catch (err) {
        console.log("error", err);
        toast.dismiss();
        toast.error("Failed to create New Team!");
      } finally {
        setClicked((prev) => false);
      }
    }
  };

  return (
    <button onClick={handleClick} disabled={clicked} type="button">
      Add a new {purpose}
    </button>
  );
};

export default NewButton;
