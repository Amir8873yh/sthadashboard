import Cookies from "js-cookie";

class CookieStorage {
  setLogin = (userId, role, accessToken, refreshToken, remember = false) => {
    const days = remember ? 30 : 7;
    Cookies.set("userId", userId, { expires: days });
    Cookies.set("role", role, { expires: days });
    Cookies.set("accessToken", accessToken, { expires: days });
    Cookies.set("refreshToken", refreshToken, { expires: days });
  };

  getLogin = () => {
    if (Cookies.get("userId") && Cookies.get("role") && Cookies.get("accessToken")) {
      return {
        userId: Cookies.get("userId"),
        role: Cookies.get("role"),
        accessToken: Cookies.get("accessToken"),
        refreshToken: Cookies.get("refreshToken"),
      };
    }
    return null;
  };
}
export default CookieStorage;

export const logout = () => {
  Cookies.remove("userId");
  Cookies.remove("role");
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  window.location.reload();
};
