import { auth } from './firebase';
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  NextOrObserver,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';

interface UserProps {
  email: string;
  password: string;
}

export const signUp = ({ email, password }: UserProps) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log('Sign Up Successful', result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logIn = ({ email, password }: UserProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log('Log In Successful', result);
    })
    .catch((error) => {
      console.log('Log In Failed', error);
    });
};

export const logOut = () => {
  signOut(auth)
    .then((result) => {
      console.log('Log Out Successful', result);
    })
    .catch((error) => {
      console.log('Log Out Failed', error);
    });
};

export const trackAuthStatus = (userStatusFunction: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, userStatusFunction);
};
