import { useState } from "react";
import AuthLayout from "@/layouts/authLayout";
import { checkUsername, registerUser } from "@/services/authService";
import useAppDispatch from "@/hooks/useAppDispatch";
import { useFormik } from "formik";
import { IRegistrationValues } from "@/interfaces/components";
import { DefaultButton, PasswordField, TextField } from "@/components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { registerSchema } from "@/schemas";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useAppDispatch();

  const { isLoading } = useSelector((state: RootState) => state.profile);

  const onSubmit = async (values: IRegistrationValues, actions: any) => {
    try {
      dispatch(
        await registerUser({
          username: values.username,
          email: values.email,
          password: values.password,
        })
      );

      console.log(values);
      setTimeout(() => {
        setRedirect(true);
      }, 2000);

      actions.resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  const handleUsernameChange = async (e) => {
    const newUsername = e.target.value;
    console.log(newUsername, errors.username);
    handleChange(e);
    try {
      if (newUsername.length > 5) {
        const error = await checkUsername(newUsername);
        console.log(error);
        setIsUsernameAvailable(!error);
      }
    } catch (error) {
      console.error("Error checking username availability:", error);
    }
  };

  const { handleChange, errors, touched, handleSubmit, values, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        password2: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });

  console.log(values);

  if (redirect) {
    return <Navigate to={"/auth/verify"} />;
  }

  return (
    <AuthLayout tab>
      <div className="">
        <form onSubmit={handleSubmit} className=" flex flex-col gap-2 ">
          <TextField
            type="text"
            placeholder="Username"
            name="username"
            handleChange={handleUsernameChange}
            handleBlur={handleBlur}
            value={values.username}
            error={errors.username}
            touched={touched.username}
            isUsernameAvailable={isUsernameAvailable}
          />
          <motion.div
            initial={{
              y: 10,
            }}
            animate={{ y: 0 }}
            exit={{ opacity: 20, y: 10, transition: { duration: 3 } }}
            className=""
          >
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
          <motion.div
            initial={{
              y: 10,
            }}
            animate={{ y: 0 }}
            exit={{ opacity: 20, y: 10, transition: { duration: 3 } }}
            className="flex gap-2 items-start"
          >
            <PasswordField
              name="password"
              placeholder="Password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            <PasswordField
              name="password2"
              placeholder="Confirm Password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password2}
              error={errors.password2}
              touched={touched.password2}
            />
          </motion.div>{" "}
          <DefaultButton
            type="submit"
            isLoading={isLoading}
            label="Create Account"
            disable={!isUsernameAvailable}
          />
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
