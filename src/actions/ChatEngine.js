import axios from "axios";

export const ChatEngineAuth = (user) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    if (!user.emailVerified) {
      dispatch({
        type: "SET_ERROR",
        payload:
          "the account you used to sign in doesn't have a verified email! ",
      });
      dispatch({ type: "STOP_LOADING" });
      return;
    }

    const res = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: user.email,
        secret: user.uid,
      },
      {
        headers: { "PRIVATE-KEY": process.env.REACT_APP_PKEY },
      }
    );
    dispatch({ type: "SET_CHAT_USER", payload: res.data });
    dispatch({ type: "STOP_LOADING" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "SET_ERROR", payload: error.message });
    dispatch({ type: "STOP_LOADING" });
  }
};
