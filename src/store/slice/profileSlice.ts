import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IProfilePayload {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  image?: string;
  age?: string;
  isLoading?: boolean;
  isError?: string;
}

const initialState: IProfilePayload = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  image: "",
  age: "",
  isLoading: false,
  isError: "",
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setId: (state, { payload }: PayloadAction<string>) => {
      state.id = payload;
    },
    setFirstName: (state, { payload }: PayloadAction<string>) => {
      state.firstName = payload;
    },
    setLastName: (state, { payload }: PayloadAction<string>) => {
      state.lastName = payload;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    setPhone: (state, { payload }: PayloadAction<string>) => {
      state.phone = payload;
    },
    setImage: (state, { payload }: PayloadAction<string>) => {
      state.image = payload;
    },
    setAge: (state, { payload }: PayloadAction<string>) => {
      state.age = payload;
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setIsError: (state, { payload }: PayloadAction<string>) => {
      state.isError = payload;
    },
  },
});

export const {
  setId,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setImage,
  setAge,
  setIsLoading,
  setIsError,
} = ProfileSlice.actions;

const ProfileReducer = ProfileSlice.reducer;

export default ProfileReducer;
