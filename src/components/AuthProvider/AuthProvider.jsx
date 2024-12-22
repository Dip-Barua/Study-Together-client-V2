import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
export const authContext = createContext();

const AuthProvider = ({ routes }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const sendPasswordResetEmailHandler = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL: image,
        }));
      })
      .catch((error) => {
        console.log("Error updating profile:", error);
        throw error;
      });
  };

  const handleLogout = () => {
    return signOut(auth);
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile,
    sendPasswordResetEmail: sendPasswordResetEmailHandler,
    user,
    setUser,
    loading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <authContext.Provider value={authInfo}>
      {routes}
    </authContext.Provider>
  );
};

export default AuthProvider;