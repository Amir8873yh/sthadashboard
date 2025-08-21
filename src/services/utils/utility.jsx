import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export const routeController = (component, protectedRoute = false, redirectLoggedInPath = "/") => {
  const isLoggedIn = Cookies.get("role");

  if (protectedRoute) {
    if (isLoggedIn) {
      return component;
    } else {
      return <Navigate to="/login" replace />;
    }
  } else {
    if (isLoggedIn) {
      return <Navigate to={redirectLoggedInPath} replace />;
    } else {
      return component;
    }
  }
};
