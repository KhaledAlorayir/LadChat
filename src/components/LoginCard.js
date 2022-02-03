import React from "react";
import { SigninWithGoogle, SigninWithTwitter } from "../firebase";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

const LoginCard = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-slate-300 text-slate-900 py-3 px-4 rounded text-center w-2/3 lg:w-1/4  ">
      <p className="text-xl font-semibold mb-12">Sign in!</p>
      <div className="flex flex-col text-lg px-4">
        <button
          className="bg-cyan-600 mb-5 flex items-center justify-center py-3 px-2 font-bold  rounded"
          onClick={() => SigninWithGoogle(dispatch)}
        >
          <AiFillGoogleCircle className="mr-1 text-3xl" /> Sign in with Google
        </button>
        <button
          className="bg-cyan-600 mb-5 flex items-center justify-center py-3 px-2 font-bold rounded"
          onClick={() => SigninWithTwitter(dispatch)}
        >
          <AiFillTwitterCircle className="mr-1 text-3xl" /> Sign in with Twitter
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
