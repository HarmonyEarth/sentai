import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import {
  collection,
  DocumentData,
  FirestoreError,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  Unsubscribe,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { Collections, Purpose } from "./constants";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENGER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

const teamsColRef = collection(db, Collections.Teams);

const teamsQuery = query(teamsColRef, orderBy(Purpose.Year, "asc"));

const membersColRef = collection(db, Collections.Members);

const membersQuery = query(
  membersColRef,
  orderBy(Purpose.TeamId, "asc"),
  orderBy(Purpose.Position, "asc")
);

type SnapshotType = (snapshot: QuerySnapshot<DocumentData>) => void;
type SnapshotErrorType = (error: FirestoreError) => void;

export type StreamDataType = (
  snapshot: SnapshotType,
  error: SnapshotErrorType
) => Unsubscribe;

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
