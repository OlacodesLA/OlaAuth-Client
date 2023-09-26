import { useState } from "react";
import AuthLayout from "@/layouts/authLayout";
import { loginUser } from "@/services/authService";
import useAppDispatch from "@/hooks/useAppDispatch";
import { useFormik } from "formik";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { DefaultButton, PasswordField, TextField } from "@/components";
import { loginSchema } from "@/schemas";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import StaggerChildren, { childVariants } from "@/animations/staggerChildren";

const Login = () => {
  const [redirect, setRedirect] = useState(false);

  const dispatch = useAppDispatch();

  const { isLoading } = useSelector((state: RootState) => state.profile);

  const onSubmit = async (values: any, actions: any) => {
    const { email, password } = values;
    try {
      dispatch(loginUser(email, password));
      console.log(values);
      setTimeout(() => {
        setRedirect(true);
        actions.resetForm();
      }, 2000);
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

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <AuthLayout tab>
      <div className="">
        <form onSubmit={handleSubmit}>
          <StaggerChildren>
            <motion.div variants={childVariants} className="">
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
            </motion.div>

            <motion.div variants={childVariants} className="">
              <PasswordField
                name="password"
                placeholder="Password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                error={errors.password}
                touched={touched.password}
              />
            </motion.div>
            <motion.div variants={childVariants} className="">
              <DefaultButton
                type="submit"
                isLoading={isLoading}
                label="Login"
              />
            </motion.div>
          </StaggerChildren>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
