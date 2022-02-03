import React from "react";
import { Routes, Route } from "react-router-dom";

//screens
import Auth from "./screens/AuthScreen";
import Chat from "./screens/ChatScreen";

//components
import Error from "./components/ErrorCard";

function App() {
  return (
    <div className="App">
      <Error />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
