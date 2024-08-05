import { toast } from "react-hot-toast";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

interface UserProps {
  email: string;
  password: string;
}

export const signUp = async ({ email, password }: UserProps) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Sign Up Successful", result);
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async ({ email, password }: UserProps) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log("Log In Successful", result);
    toast.success("Log In Successful");
  } catch (error) {
    console.log("Log In Failed", error);
    toast.error("Log In Failed");
  }
};

export const logOut = async () => {
  try {
    const result = await signOut(auth);
    console.log("Log Out Successful", result);
  } catch (error) {
    console.log("Log Out Failed", error);
  }
};

export const trackAuthStatus = (userStatusFunction: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, userStatusFunction);
};
