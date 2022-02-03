import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import LoginCard from "../components/LoginCard";
import Loading from "../components/Loading";

const AuthScreen = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-slate-700 h-full text-slate-300 ">
      <Header />
      <div className="h-[90%] flex justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
};

const Header = () => (
  <header className="text-center pt-8">
    <h1 className="text-4xl font-extrabold uppercase">LadChat</h1>
  </header>
);

export default AuthScreen;
