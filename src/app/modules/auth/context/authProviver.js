import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/authSlice";
import auth from "../index";

export const firebaseContext = createContext({});
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signInUserWithEmailPassword = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      if (user) {
        navigate("/");
      }
      console.log("User signed in with Google:", user);
      setIsLoading(false);
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      setIsLoading(false);
    }
  };

  // auto login
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginUser(user));
        setIsLoading(false);
      } else {
        console.log("User is signed out");
        navigate("/sign-in");
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  const handleLogout = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  const memoizedContextValue = useMemo(
    () => ({
      signInUserWithEmailPassword,
      registerUser,
      signInWithGoogle,
      handleLogout,
    }),
    [signInUserWithEmailPassword, registerUser, signInWithGoogle, handleLogout]
  );

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <firebaseContext.Provider value={memoizedContextValue}>
      {children}
    </firebaseContext.Provider>
  );
};

export const useFirebaseContext = () => useContext(firebaseContext);

export default AuthProvider;
