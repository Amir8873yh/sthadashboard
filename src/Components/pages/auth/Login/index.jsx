import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLogin from "@/Components/organisms/AppLogin";
import CookieStorage from "@/services/storage/CookiesStorage";

const Login = () => {
  const navigate = useNavigate();
  const cookie = new CookieStorage();

  useEffect(() => {
    if (cookie.getLogin()) {
      navigate("/");
    } else {
      localStorage.clear();
    }
  }, []);

  return <AppLogin />;
};

export default Login;
