import React, { useEffect, useRef } from "react";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ChatEngine } from "react-chat-engine";

const ChatScreen = () => {
  const dispatch = useDispatch();
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      console.log("hello");
    }
  }, []);

  const LogoutHandler = () => {
    dispatch({ type: "CLEAR_USER" });
  };

  return (
    <div className="bg-slate-700 h-full  ">
      <Nav LogoutHandler={LogoutHandler} />

      <ChatEngine
        projectID={process.env.REACT_APP_ID}
        userName={"k4tg"}
        userSecret={"1234"}
        height="100vh"
      />
    </div>
  );
};

const Nav = ({ LogoutHandler }) => (
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

export default ChatScreen;
