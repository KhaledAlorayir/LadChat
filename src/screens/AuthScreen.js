import React from "react";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Signin } from "../actions/users";
import { useDispatch } from "react-redux";

const AuthScreen = () => {
  const dispatch = useDispatch();

  const GoogleHandler = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      dispatch(Signin(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-700 h-full text-slate-300 ">
      <Header />
      <div className="h-[90%] flex justify-center items-center">
        <Card GoogleHandler={GoogleHandler} />
      </div>
    </div>
  );
};

const Header = () => (
  <header className="text-center pt-8">
    <h1 className="text-4xl font-extrabold uppercase">LadChat</h1>
  </header>
);

const Card = ({ GoogleHandler }) => (
  <div className="bg-slate-300 text-slate-900 py-3 px-4 rounded text-center w-2/3 lg:w-1/4  ">
    <p className="text-xl font-semibold mb-12">Sign in!</p>
    <div className="flex flex-col text-lg px-4">
      <button
        className="bg-cyan-600 mb-5 flex items-center justify-center py-3 px-2 font-bold  rounded"
        onClick={GoogleHandler}
      >
        <AiFillGoogleCircle className="mr-1 text-3xl" /> Sign in with Google
      </button>
      <button className="bg-cyan-600 mb-5 flex items-center justify-center py-3 px-2 font-bold rounded">
        <AiFillTwitterCircle className="mr-1 text-3xl" /> Sign in with Twitter
      </button>
    </div>
  </div>
);

export default AuthScreen;
