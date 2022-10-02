import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import {
  collection,
  DocumentData,
  FirestoreError,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
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

const colRef = collection(db, 'teams');

const q = query(colRef, orderBy('year', 'asc'));

type SnapshotType = (snapshot: QuerySnapshot<DocumentData>) => void;
type SnapshotErrorType = (error: FirestoreError) => void;

export const streamTeams = (
  snapshot: SnapshotType,
  error: SnapshotErrorType
) => {
  return onSnapshot(q, snapshot, error);
};
