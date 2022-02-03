import React from "react";
import gif from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="h-full flex justify-center items-center bg-slate-700">
      <img src={gif} alt="loading" />
    </div>
  );
};

export default Loading;
