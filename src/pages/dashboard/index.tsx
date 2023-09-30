import { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/dashboardLayout";
import { RootState } from "@/store";
import { IProfilePayload } from "@/store/slice/profileSlice";
import { useSelector } from "react-redux";
import { getProfile, logoutUser } from "@/services";
import useAppDispatch from "@/hooks/useAppDispatch";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useAppDispatch();

  const { firstName, lastName, email }: IProfilePayload = useSelector(
    (state: RootState) => state?.profile
  );

  const logout = async () => {
    const loggedOut = await logoutUser();

    if (loggedOut === true) {
      setTimeout(() => {
        setRedirect(true);
      }, 2000);
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  if (redirect) {
    return <Navigate to={"/auth/verify"} />;
  }

  return (
    <DashboardLayout>
      <div className="">Home Page</div>
      <div className="text-center">
        {firstName} {lastName}
      </div>
      <div className="">{email}</div>
      <button onClick={() => logout()} className="text-red-500 text-2xl">
        Logout
      </button>
    </DashboardLayout>
  );
};

export default Home;
