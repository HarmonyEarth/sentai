import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';

interface Props {
  purpose: string;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewButton: React.FC<Props> = ({ purpose, clicked, setClicked }) => {
  const navigate = useNavigate();

  const today = new Date();
  let month = today.getMonth();
  const dayOfMonth = today.getDate();
  const thisYear = today.getFullYear();

  const newTeamName = `New Team - ${dayOfMonth}/${++month}/${thisYear}`;
  const newMemberName = `New Member - ${dayOfMonth}/${++month}/${thisYear}`;

  const handleClick = async () => {
    if (purpose === 'member') {
      try {
        setClicked((prev) => true);
        const { id } = await addDoc(collection(db, 'members'), {
          heroId: '',
          color: '',
          position: '',
          heroNameEN1: newMemberName,
          heroNameEN2: '',
          heroNameJP1: '',
          heroNameJP2: '',
          heroImage1: '',
          heroImage2: '',
          heroImage3: '',
          heroImage4: '',
          heroHelmet: '',
          teamId: '',
        });
        navigate(`/cms/member/${id}`);
      } catch (err) {
        console.log('error', err);
      } finally {
        setClicked((prev) => false);
      }
    }
    if (purpose === 'team') {
      try {
        setClicked((prev) => true);
        const { id } = await addDoc(collection(db, 'teams'), {
          shortTeamName: newTeamName,
          fullTeamNameEN: '',
          fullTeamNameJP: '',
          year: '',
          logo: '',
          symbol: '',
          teamId: '',
        });
        navigate(`/cms/team/${id}`);
      } catch (err) {
        console.log('error', err);
      } finally {
        setClicked((prev) => false);
      }
    }
  };

  return (
    <button onClick={handleClick} type="button" disabled={clicked}>
      Add a new {purpose}
    </button>
  );
};

export default NewButton;
