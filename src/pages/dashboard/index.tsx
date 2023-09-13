import AuthLayout from "@/layouts/authLayout";
import { RootState } from "@/store";
import { IProfilePayload } from "@/store/slice/profileSlice";
import { useSelector } from "react-redux";
const Home = () => {
  const { firstName, lastName, email }: IProfilePayload = useSelector(
    (state: RootState) => state?.profile
  );
  return (
    <AuthLayout>
      <div className="">Home Page</div>
      <div className="">
        {firstName} {lastName}
      </div>
      <div className="">{email}</div>
    </AuthLayout>
  );
};

export default Home;
