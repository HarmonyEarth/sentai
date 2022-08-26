import { Grid } from '@mui/material';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import turbo from '../../assets/data';
import { db } from '../../firebase';
import TeamCard from './TeamCard';

const list: number[] = [];
for (let i = 0; i < 11; i++) {
  list.push(i);
}

// const getAllTeams = async () => {
//   const q = query(collection(Firestore, 'teams'));

//   return await getDocs(q);
//   // querySnapshot.forEach((doc) => {
//   //   // doc.data() is never undefined for query doc snapshots
//   //   console.log(doc.id, ' => ', doc.data());
//   // });
// };
// const q = query(colRef);
// const teams = getAllTeams().then(console.log);
const colRef = collection(db, 'teams');

// getDocs(colRef)
//   .then((snapshot) => {
//     console.log(snapshot);

//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

onSnapshot(colRef, (snapshot) => {
  let teams: any[] = [];
  snapshot.docs.forEach((doc) => {
    teams.push({ ...doc.data(), id: doc.id });
  });
  console.log(teams);
});

const TeamSection = () => {
  return (
    <Grid container>
      {list.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          component={Link}
          to={`/team/${turbo.teamId}`}
          sx={{ textDecoration: 'none' }}
          key={item}
        >
          <TeamCard
            logo={turbo.logo}
            symbol={turbo.symbol}
            year={turbo.year}
            shortTeamName={turbo.shortTeamName}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamSection;
