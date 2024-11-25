import React, { createContext, useState, useContext } from "react";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
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