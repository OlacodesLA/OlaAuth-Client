import AuthLayout from "@/layouts/authLayout";
import { loginUser } from "@/services/authService";
import useAppDispatch from "@/hooks/useAppDispatch";
const Login = () => {
  const dispatch = useAppDispatch();

  return (
    <AuthLayout>
      <div className="">
        Login Page
        <button className="" onClick={() => dispatch(loginUser())}>
          Login
        </button>
      </div>
    </AuthLayout>
  );
};

export default Login;
