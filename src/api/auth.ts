import { auth } from '../firebase';
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
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((result) => {
  //     console.log('Log In Successful', result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logOut = () => {
  signOut(auth)
    .then((result) => {
      console.log('Log Out Successful', result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const trackAuthStatus = (userStatusFunction: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, userStatusFunction);
};
