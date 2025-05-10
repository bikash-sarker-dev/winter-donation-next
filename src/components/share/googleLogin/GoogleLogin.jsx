import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

const GoogleLogin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    try {
      signInWithPopup(auth, provider)
        .then((response) => {
          console.log(response);
          if (response?.operationType === "signIn") {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-neutral bg-gray-200 hover:bg-gray-300 border-0 mt-4 w-full"
      >
        <FcGoogle className="text-2xl" />
      </button>
    </div>
  );
};

export default GoogleLogin;
