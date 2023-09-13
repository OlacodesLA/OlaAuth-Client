import { AppThunk } from "@/store";
import { loginAPI, registerAPI } from "@/axios/endpoints/auth.endpoint";
import {
  setFirstName,
  setLastName,
  setEmail,
} from "@/store/slice/profileSlice";

export const registerUser = (): AppThunk => async () => {
  try {
    const { serverResponse } = await registerAPI({
      username: "Olacodes",
      firstName: "Olajide",
      lastName: "Zaccheaus",
      email: "olacodes@gmail.com",
      password: "ggdddddd",
      admin: false,
    });
    console.log(serverResponse);
  } catch (error) {
    console.error(error);
  }
};
export const loginUser = (): AppThunk => async (dispatch) => {
  try {
    const { error, serverResponse } = await loginAPI({
      email: "olacodes@gmail.com",
      password: "ggdddddd",
    });

    if (error === false) {
      const { firstName, lastName, email } = serverResponse?.data;
      dispatch(setFirstName(firstName));
      dispatch(setLastName(lastName));
      dispatch(setEmail(email));
    }
    console.log(serverResponse);
  } catch (error) {
    console.error(error);
  }
};
