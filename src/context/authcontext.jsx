import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("altius_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("altius_user");
      }
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("altius_user", JSON.stringify(userData));
    setUser(userData); // 🔥 instant update
  };

  const logout = () => {
    localStorage.removeItem("altius_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};