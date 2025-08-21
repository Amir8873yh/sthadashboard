import React from "react";

const AppLayout = ({ children }) => {
  return <div className="w-full h-full bg-[#F5F7F8] min-h-screen p-3 flex gap-4">{children}</div>;
};

export default AppLayout;
