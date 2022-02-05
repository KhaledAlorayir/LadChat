import axios from "axios";

export const ChatEngineAuth = (user) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const isTwitter = user.providerData[0].providerId === "twitter.com";
    const username = isTwitter ? user.displayName : user.email;
    const secret = user.uid;

    const res = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username,
        secret,
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
