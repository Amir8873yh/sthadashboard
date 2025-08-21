import { Home, Login, UsersPage } from "@/Components/pages";

export const routes = [
  {
    id: "home",
    path: "/",
    component: <Home />,
    protectedRoute: true,
  },
  {
    id: "user-list",
    path: "/Users",
    component: <UsersPage />,
    protectedRoute: true,
  },
  {
    id: "login",
    path: "/login",
    component: <Login />,
    protectedRoute: false,
  },
];
