import React, { createContext, useEffect, useState } from "react";
const firebaseContext = createContext({});
const AuthProviver = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  const signInUserWithEmailPassword = async (email, password) => {};
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <firebaseContext.Provider value={signInUserWithEmailPassword}>
      {children}
    </firebaseContext.Provider>
  );
};

export default AuthProviver;
