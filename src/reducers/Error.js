const inital = { message: "", isError: false };

export const Error = (state = inital, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, message: action.payload, isError: true };
    case "CLEAR_ERROR":
      return { ...state, message: "", isError: false };

    default:
      return state;
  }
};
