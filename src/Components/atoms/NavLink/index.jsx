import { NavLink as RouterNavLink } from "react-router-dom";
import React from "react";

const NavLink = ({ link }) => {
  return (
    <RouterNavLink
      to={link?.link}
      className={({ isActive }) =>
        `${isActive ? "bg-gradient-to-l from-[oklch(0.65_0.07_212.19)] to-gray-600 text-white shadow-md shadow-gray-900/10 opacity-[0.85]" : ""}
         text-gray-800 hover:text-white font-bold text-center w-full flex items-center gap-4 px-4 text-base py-3 capitalize rounded-lg transition-all hover:shadow-lg hover:bg-gradient-to-r from-[oklch(0.65_0.07_212.19)] to-gray-600`
      }
    >
      {link?.icon} {link?.title}
    </RouterNavLink>
  );
};

export default NavLink;
