import { AppThunk } from "@/store";
import {
  checkUsernameAPI,
  loginAPI,
  registerAPI,
  verifyAPI,
} from "@/axios/endpoints/auth.endpoint";
import {
  setFirstName,
  setLastName,
  setEmail,
  setIsLoading,
} from "@/store/slice/profileSlice";

export const registerUser =
  (data): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const { error, serverResponse } = await registerAPI(data);
      if (!error) {
        const { email } = await serverResponse?.data;
        localStorage.setItem("email", email);

        console.log("it runs");
        dispatch(setEmail(email));
      }
      console.log(error);
      console.log(serverResponse);

      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      console.error(error);
    }
  };

export const loginUser =
  (email, password): AppThunk =>
  async (dispatch) => {
    try {
      const { error, serverResponse } = await loginAPI({ email, password });
      if (error) {
        const { firstName, lastName, email } = await serverResponse?.data;
        dispatch(setFirstName(firstName));
        dispatch(setLastName(lastName));
        dispatch(setEmail(email));
      }
      console.log(serverResponse);
    } catch (error) {
      console.error(error);
    }
  };

export const verifyUser =
  (verificationCode): AppThunk =>
  async (dispatch) => {
    try {
      const email = localStorage.getItem("email");
      console.log(email);
      dispatch(setIsLoading(true));
      const { serverResponse } = await verifyAPI({
        email,
        verificationCode,
      });

      dispatch(setIsLoading(false));
      console.log(serverResponse);
    } catch (error) {
      dispatch(setIsLoading(false));
      console.error(error);
    }
  };

export const checkUsername = async (newUsername) => {
  try {
    const { error } = await checkUsernameAPI({
      username: newUsername,
    });
    return error;
  } catch (error) {
    console.log(error);
  }
};
