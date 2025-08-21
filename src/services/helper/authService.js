import api from "./api";

const authService = {
  getLogin: (data) => api.post("/login", data),
};

export default authService;
