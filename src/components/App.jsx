import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selections";

import Layout from "./Layout";
const LoginPage = lazy(() => import("./LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./RegisterPage/RegisterPage"));
const Phonebook = lazy(() => import("./Phonebook/Phonebook"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) :
    (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={ <LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<Phonebook />} />
        </Route>
      </Routes>
    </>
      
  )

}

