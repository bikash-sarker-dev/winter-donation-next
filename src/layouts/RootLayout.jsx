import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Auth from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage";

const RootLayout = () => {
  const { loading } = Auth();
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
