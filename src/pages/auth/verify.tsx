import { useState } from "react";
import { useFormik } from "formik";
import useAppDispatch from "@/hooks/useAppDispatch";
import { resendCode, verifyUser } from "@/services";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { DefaultButton, TextField } from "@/components";
import AuthLayout from "@/layouts/authLayout";
import { Navigate } from "react-router-dom";

const Verify = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useAppDispatch();

  const { isLoading, email } = useSelector((state: RootState) => state.profile);

  console.log(email);

  const onSubmit = async (values: any, actions: any) => {
    try {
      dispatch(verifyUser(values.verificationCode));
      console.log(values);
      setTimeout(() => {
        setRedirect(true);
        actions.resetForm();
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };
  const resend = async () => {
    try {
      dispatch(resendCode());
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  };

  const { handleChange, errors, touched, handleSubmit, values, handleBlur } =
    useFormik({
      initialValues: {
        verificationCode: "",
      },
      // validationSchema: registerSchema,
      onSubmit,
    });

  console.log(values);

  if (redirect) {
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="mt-32">
        <TextField
          type="text"
          placeholder="Code"
          name="verificationCode"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.verificationCode}
          error={errors.verificationCode}
          touched={touched.verificationCode}
        />
        <p onClick={resend} className="text-gray-300">
          resend code
        </p>
        <DefaultButton type="submit" isLoading={isLoading} label="Verify" />
      </form>
      {/* <button type="button" onClick={resendCode}></button> */}
    </AuthLayout>
  );
};

export default Verify;
