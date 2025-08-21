import logo from "@/assets/admin.png";
import Avatar from "@/Components/atoms/Avatar";

const AppHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[oklch(0.65_0.07_212.19)] to-gray-600 h-[4rem] px-8 sticky right-0 top-0 ">
      <div className="flex justify-end items-center h-full">
        <h1 className="text-[20px] font-semibold mr-5 text-amber-100"> Admin</h1>
        <Avatar src={logo} size="w-10 h-10" />
      </div>
    </div>
  );
};

export default AppHeader;
