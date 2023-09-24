import { useEffect } from "react";
import DashboardLayout from "@/layouts/dashboardLayout";
import { RootState } from "@/store";
import { IProfilePayload } from "@/store/slice/profileSlice";
import { useSelector } from "react-redux";
import { getProfile } from "@/services";
import useAppDispatch from "@/hooks/useAppDispatch";

const Home = () => {
  const dispatch = useAppDispatch();

  const { firstName, lastName, email }: IProfilePayload = useSelector(
    (state: RootState) => state?.profile
  );

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <DashboardLayout>
      <div className="">Home Page</div>
      <div className="text-center">
        {firstName} {lastName}
      </div>
      <div className="">{email}</div>
    </DashboardLayout>
  );
};

export default Home;
