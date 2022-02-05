import React, { useEffect, useRef } from "react";
import { ChatEngine } from "react-chat-engine";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { ChatEngineAuth } from "../actions/ChatEngine";
import Loading from "../components/Loading";

const ChatScreen = () => {
  const didMount = useRef(false);
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!didMount.current && !loading) {
      didMount.current = true;
      dispatch(ChatEngineAuth(user));
    }
  }, [loading]);

  const { chat_user, chat_loading } = useSelector((state) => state.ChatEngine);

  if (loading || chat_loading) {
    return <Loading />;
  }

  return (
    <div className="bg-slate-700 h-full">
      <Nav />
      {chat_user && (
        <ChatEngine
          projectID={process.env.REACT_APP_ID}
          userName={chat_user.username}
          userSecret={user.uid}
          height="100vh"
        />
      )}
    </div>
  );
};

export default ChatScreen;
