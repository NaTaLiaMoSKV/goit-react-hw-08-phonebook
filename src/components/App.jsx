import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selections";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Phonebook from "../pages/Phonebook/Phonebook";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h3 className="notification">Refreshing user...</h3>
  ) :
    (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route index path="/contacts" element={<Phonebook />}
        />
        {/* <Route index path="/contacts" element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
        /> */}
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/register" element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              }
        />
        <Route path="/login" element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              }
        />
      </Routes>
    </>
      
  )

}

