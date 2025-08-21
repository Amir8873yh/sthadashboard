import * as yup from "yup";

export const initialValuesLogin = {
  username: "",
  password: "",
};

export const validationSchemaLogin = yup.object().shape({
  username: yup.string().required("Email is required.").email("Email is invalid."),
  password: yup
    .string()
    .required("Password is required.")
    .test(
      "password",
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long. No spaces or emojis allowed.",
      (value) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/\\~-])(?=\S+$).{8,}$/.test(value) && !/[^\x20-\x7E]/.test(value);
      }
    ),
});
