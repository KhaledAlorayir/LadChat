import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ErrorCard = () => {
  const { message, isError } = useSelector((state) => state.Error);
  const dispatch = useDispatch();

  const CloseHandler = () => dispatch({ type: "CLEAR_ERROR" });

  return (
    <>
      {isError && (
        <div className="flex justify-between items-center px-10 py-4 bg-rose-700">
          <p className="text-lg text-slate-200 font-mono">{message}</p>
          <button
            className="text-3xl hover:text-slate-200"
            onClick={CloseHandler}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}
    </>
  );
};

export default ErrorCard;
