export const Signin = (data) => {
  const { email, displayName, photoURL, uid } = data.user;
  const user = { email, displayName, photoURL, uid };
  localStorage.setItem("user_chat_lad", JSON.stringify(user));
  return { type: "SET_USER", payload: user };
};

export const AutoLogin = () => {
  const user = localStorage.getItem("user_chat_lad");

  if (!user) return { type: "" };

  return { type: "SET_USER", payload: JSON.parse(user) };
};
