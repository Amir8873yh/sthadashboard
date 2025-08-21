import AppLogo from "@/assets/logo.png";
import LoginForm from "@/Components/molecules/LoginForm";

const AppLogin = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-white">
      <div className="bg-gradient-to-l from-[oklch(0.65_0.07_212.19)] to-gray-600 px-8 py-6 text-center w-[30vw] min-w-[500px] rounded-3xl">
        <div className="w-20 h-20  flex items-center justify-center mx-auto mb-4">
          <img src={AppLogo} alt="App Logo" className=" w-20 h-20 " />
        </div>
        <h1 className="text-2xl font-bold text-white">Welcome To Svastha</h1>
        <p className="text-blue-100 mt-2">Sign in to your account</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default AppLogin;
