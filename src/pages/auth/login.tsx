import AuthLayout from "@/layouts/authLayout";
import { loginUser } from "@/services/authService";
import useAppDispatch from "@/hooks/useAppDispatch";
import { useFormik } from "formik";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { DefaultButton, PasswordField, TextField } from "@/components";
import { loginSchema } from "@/schemas";
const Login = () => {
  const dispatch = useAppDispatch();

  const { isLoading } = useSelector((state: RootState) => state.profile);

  const onSubmit = async (values: any, actions: any) => {
    const { email, password } = values;
    try {
      dispatch(loginUser(email, password));
      console.log(values);
      actions.resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const { handleChange, errors, touched, handleSubmit, values, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <AuthLayout tab>
      <div className="">
        Login Page
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            placeholder="Email"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            error={errors.email}
            touched={touched.email}
          />
          <PasswordField
            name="password"
            placeholder="Password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.password}
            error={errors.password}
            touched={touched.password}
          />
          <DefaultButton type="submit" isLoading={isLoading} label="Login" />
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
