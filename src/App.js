import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//screens
import Auth from "./screens/AuthScreen";
import Chat from "./screens/ChatScreen";

//action
import { AutoLogin } from "./actions/users";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AutoLogin());
  }, [dispatch]);

  const { user } = useSelector((state) => state.Users);

  useEffect(() => {
    if (user) {
      navigate("/chat");
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
