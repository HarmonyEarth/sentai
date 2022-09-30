import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import React from 'react';
import { Team } from './models/team';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENGER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

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

const q = query(colRef, orderBy('year', 'asc'));

// getDocs(colRef)
//   .then((snapshot) => {
//     console.log(snapshot);

//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

export const grabTeams = () => {
  let teams: Team[] = [];
  onSnapshot(q, (snapshot) => {
    teams = [];
    snapshot.docs.forEach((doc) => {
      teams.push({ ...(doc.data() as Team), id: doc.id });
    });
    console.log('Teams', teams);
  });

  return teams;
};
