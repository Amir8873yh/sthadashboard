import { Link } from "react-router-dom";
import HeaderLogo from "@/assets/logo.png";
import { VscSignOut } from "react-icons/vsc";
import { navList } from "@/mockData/sideBar";
import NavLink from "@/Components/atoms/NavLink";
import { logout } from "@/services/storage/CookiesStorage";

const AppSidebar = () => {
  return (
    <aside className="bg-white shadow-md shadow-gray-500 -translate-x-80 fixed inset-0  h-[100vh] w-[304px]  transition-transform duration-300 md:translate-x-0 ">
      <div className="flex justify-evenly items-center   overflow-hidden bg-gradient-to-l from-[oklch(0.65_0.07_212.19)] to-gray-600 text-5xl text-amber-100">
        <img src={HeaderLogo} alt="" className="w-16 h-16" />
        <p>Svastha</p>
      </div>
      <div className="m-4">
        <nav className="flex flex-col gap-1">
          {navList.map((item) => (
            <NavLink key={item.id + "link"} link={item} />
          ))}
          <Link
            onClick={logout}
            className="text-gray-800 hover:text-white font-bold text-center w-full flex items-center gap-4 px-4 text-base py-3  capitalize rounded-lg transition-all hover:shadow-lg hover:bg-gradient-to-r from-[oklch(0.65_0.07_212.19)] to-gray-600"
          >
            <VscSignOut className="mr-2 text-xl" />
            Logout
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
