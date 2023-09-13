import AuthLayout from "@/layouts/authLayout";
import { registerUser } from "@/services/authService";
import useAppDispatch from "@/hooks/useAppDispatch";
const Register = () => {
  const dispatch = useAppDispatch();

  return (
    <AuthLayout>
      <div className="">
        Register Page
        <button className="" onClick={() => dispatch(registerUser())}>
          Register
        </button>
      </div>
    </AuthLayout>
  );
};

export default Register;
