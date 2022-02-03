import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyDqkvF_kFeyDaVzmB9oaf1vfNOUBNN7WJA",
  authDomain: "ladchat-50dd4.firebaseapp.com",
  projectId: "ladchat-50dd4",
  storageBucket: "ladchat-50dd4.appspot.com",
  messagingSenderId: "951237725668",
  appId: "1:951237725668:web:35827b14288b7a5dedcbf1",
};

const app = initializeApp(config);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export const SigninWithGoogle = async (dispatch) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error);
    dispatch({ type: "SET_ERROR", payload: error.message });
  }
};

export const SigninWithTwitter = async (dispatch) => {
  try {
    const res = await signInWithPopup(auth, twitterProvider);
  } catch (error) {
    console.log(error);
    dispatch({ type: "SET_ERROR", payload: error.message });
  }
};

export const Logout = () => {
  signOut(auth);
};
