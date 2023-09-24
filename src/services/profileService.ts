import { AppThunk } from "@/store";
import { profileAPI } from "@/axios/endpoints/profile.endpoint";
import {
  setFirstName,
  setLastName,
  setEmail,
  setIsLoading,
} from "@/store/slice/profileSlice";

export const getProfile = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { error, serverResponse } = await profileAPI();
    if (!error) {
      const { firstName, lastName, email } = await serverResponse?.data;
      dispatch(setFirstName(firstName));
      dispatch(setLastName(lastName));
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
