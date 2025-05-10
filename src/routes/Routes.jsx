import { Route, Routes as Routers } from "react-router";
import RootLayout from "../layouts/RootLayout";
import DeshboardPage from "../pages/DeshboardPage";
import DetailsPage from "../pages/DetailsPage";
import DonationCampainsPage from "../pages/DonationCampainsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Routers>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/donation-campain" element={<DonationCampainsPage />} />
          <Route
            path="/deshbord"
            element={
              <PrivateRoute>
                <DeshboardPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routers>
    </>
  );
};

export default Routes;
