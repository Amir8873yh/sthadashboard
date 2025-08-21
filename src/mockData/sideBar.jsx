import { FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

export const navList = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdSpaceDashboard className="mr-2 text-xl" />,
    link: "/",
    click: "/",
  },
  {
    id: 2,
    title: "Users List",
    icon: <FaUsers className="mr-2 text-xl" />,
    link: "/users",
    click: "/users",
  },
];
