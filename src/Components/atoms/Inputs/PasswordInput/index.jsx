import { useState } from "react";
import InputField from "../InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ formik }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative">
      <InputField type={passwordVisible ? "text" : "password"} placeholder="Enter YourPassword" label="Password" id="password" name="password" formik={formik} />
      <span onClick={togglePasswordVisibility} className="absolute right-3 top-4 cursor-pointer">
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default PasswordInput;
