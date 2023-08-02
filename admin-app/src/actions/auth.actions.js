import { authConstants } from "./constants";

export const login = (user) => {
  console.log("🚀 ~ file: auth.actions.js:4 ~ login ~ user:", user)
  return (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
            ...user
      },
    });
  };
};
