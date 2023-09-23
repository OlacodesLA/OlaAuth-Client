import { useEffect } from "react";
import { profileAPI } from "@/axios/endpoints/profile.endpoint";
import DashboardLayout from "@/layouts/dashboardLayout";
import { RootState } from "@/store";
import { IProfilePayload } from "@/store/slice/profileSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const { firstName, lastName, email }: IProfilePayload = useSelector(
    (state: RootState) => state?.profile
  );

  const fetchProfile = async () => {
    const { serverResponse } = await profileAPI();
    console.log(serverResponse);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <DashboardLayout>
      <div className="">Home Page</div>
      <div className="">
        {firstName} {lastName}
      </div>
      <div className="">{email}</div>
    </DashboardLayout>
  );
};

export default Home;
