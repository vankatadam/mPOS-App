export const LOGGED_USER = "LOGGED_USER";

export const loggedUser = userName => {
  return { type: LOGGED_USER, payload: userName };
};
