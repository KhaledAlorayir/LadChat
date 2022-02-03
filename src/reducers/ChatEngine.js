const inital = { chat_user: null, chat_loading: false };

export const ChatEngine = (state = inital, action) => {
  switch (action.type) {
    case "SET_CHAT_USER":
      return { ...state, chat_user: action.payload };
    case "CLEAR_CHAT_USER":
      return { ...state, chat_user: null };
    case "START_LOADING":
      return { ...state, chat_loading: true };
    case "STOP_LOADING":
      return { ...state, chat_loading: false };

    default:
      return state;
  }
};
