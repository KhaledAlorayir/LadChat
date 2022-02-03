import React, { useEffect } from "react";
import { Logout, auth } from "../firebase";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    Logout();
    dispatch({ type: "CLEAR_CHAT_USER" });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    console.log(user);
  }, [user, loading, navigate]);

  return (
    <nav className="bg-slate-900 text-slate-300 flex items-center justify-between py-5 px-10">
      <h3 className="font-bold text-lg">CHATLAD</h3>
      <button
        className="bg-rose-700 py-3 px-6 rounded-full text-xl text-white hover:bg-rose-500 transition ease-in delay-150"
        onClick={LogoutHandler}
      >
        <MdLogout />
      </button>
    </nav>
  );
};

export default Nav;
