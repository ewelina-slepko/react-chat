import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "../firebase-config";

const auth = getAuth();

export const handleRegister = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password).catch(
    (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error ocured: ", errorCode, errorMessage);
    }
  );
};

export const handleLogin = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("An error occured: ", errorCode, errorMessage);
  });
};

export const handleLogout = () => {
  return signOut(auth).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("An error occured: ", errorCode, errorMessage);
  });
};

export const handleReset = (email: string) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("An error has occured: ", errorCode, errorMessage);
    });
};

export const checkIfUserIsAuthenticated = () =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("is Auth?", uid);
      // ...
    } else {
      console.log("not auth");
      // User is signed out
      // ...
    }
  });
