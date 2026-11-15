import { createContext, useContext, useState } from "react";

import { authService } from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(authService.getCurrentUser());

  const login = (email, password) => {
    const result = authService.login(email, password);

    if (result.success) {
      setUser(result.user);
    }

    return result;
  };

  const register = (name, email, password) => {
    const result = authService.register(name, email, password);

    if (result.success) {
      setUser(result.user);
    }

    return result;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
