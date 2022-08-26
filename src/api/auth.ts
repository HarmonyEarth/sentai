import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const signUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log('Sign Up Successful', result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log('Log In Successful', result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOut = () => {
  signOut(auth)
    .then((result) => {
      console.log('Sign Out Successful');
    })
    .catch((error) => {
      console.log(error);
    });
};
