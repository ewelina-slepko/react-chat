import React, { useEffect, useState } from "react";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/pages/Dashboard";
import { Login } from "./components/pages/authentication/Login";
import { Register } from "./components/pages/authentication/Register";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const useAuth = () => {
  const [authReady, setAuthReady] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (authState) => {
      setAuthReady(true);
      setUser(authState);
    });
  }, []);
  return { user, authReady };
};

export const App = () => {
  const { user, authReady } = useAuth();

  if (!authReady) {
    return <></>;
  }

  if (!user) {
    return (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};
