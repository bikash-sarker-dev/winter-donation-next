import React from "react";
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

const Routes = () => {
  return (
    <>
      <Routers>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/donation-campain" element={<DonationCampainsPage />} />
          <Route path="/deshbord" element={<DeshboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routers>
    </>
  );
};

export default Routes;
