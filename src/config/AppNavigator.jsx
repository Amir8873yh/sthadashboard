import Cookies from "js-cookie";
import { routes } from "./Routes";
import { Route, Routes } from "react-router-dom";
import AppHeader from "@/Components/templates/AppHeader";
import { routeController } from "@/services/utils/utility";
import AppSidebar from "@/Components/templates/AppSidebar";

const AppNavigator = () => {
  const isLoggedIn = Cookies.get("userId") && Cookies.get("role");

  return (
    <div className="md:flex md:justify-between">
      {isLoggedIn && <AppSidebar />}

      <main className={`flex-1  ${isLoggedIn ? "md:ml-[19rem] mt-5 md:mt-0" : "md:ml-0"}`}>
        {isLoggedIn && <AppHeader />}

        <Routes>
          {routes.map(({ id, path, component, protectedRoute }) => (
            <Route key={id} path={path} element={routeController(component, protectedRoute, "/")} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

export default AppNavigator;
