import { useFormik } from "formik";
import toast from "react-hot-toast";
import React, { useState } from "react";
import authService from "@/services/helper/authService";
import InputField from "@/Components/atoms/Inputs/InputField";
import CookieStorage from "@/services/storage/CookiesStorage";
import PasswordInput from "@/Components/atoms/Inputs/PasswordInput";
import PrimaryButton from "@/Components/atoms/buttons/PrimaryButton";
import { initialValuesLogin, validationSchemaLogin } from "@/services/validation/Auth";

const LoginForm = () => {
  const cookie = new CookieStorage();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: validationSchemaLogin,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");
      try {
        const response = await authService.getLogin({
          email: values?.username,
          password: values?.password,
        });
        const data = response?.data;
        if (data.status === true) {
          const { userId, role, accessToken, refreshToken } = data.data;
          cookie.setLogin(userId, role, accessToken, refreshToken);
          if (role === "admin") {
            toast.success(data?.message);
            window.location.reload();
          } else {
            setError("❌ You are not authorized (only admin allowed)");
          }
        } else {
          setError("Login failed. Please try again.");
        }
      } catch (err) {
        console.error("Login error:", err);
        const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
        toast.error(errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-5 bg-lime-50 py-5 px-5 rounded-xl mt-5">
      <InputField type="text" placeholder="Enter Your Email" label="Email" id="username" name="username" formik={formik} />
      <PasswordInput formik={formik} />
      {!(formik.errors.username || formik.errors.password) && error && <div className="py-2 text-red-500">{error}</div>}
      <PrimaryButton btnTitle="Continue" type="submit" btnCss="" loading={loading} />
    </form>
  );
};

export default LoginForm;
