import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import {
  addDoc,
  collection,
  DocumentData,
  FirestoreError,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  WithFieldValue,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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

const teamsColRef = collection(db, 'teams');

const teamsQuery = query(teamsColRef, orderBy('year', 'asc'));

const membersColRef = collection(db, 'members');

const membersQuery = query(membersColRef, orderBy('teamId', 'asc'));

type SnapshotType = (snapshot: QuerySnapshot<DocumentData>) => void;
type SnapshotErrorType = (error: FirestoreError) => void;

export const streamTeams = (
  snapshot: SnapshotType,
  error: SnapshotErrorType
) => {
  return onSnapshot(teamsQuery, snapshot, error);
};

export const streamMembers = (
  snapshot: SnapshotType,
  error: SnapshotErrorType
) => {
  return onSnapshot(membersQuery, snapshot, error);
};
