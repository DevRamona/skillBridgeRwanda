import React, { createContext, useState, useContext } from "react";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication status

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the context
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};