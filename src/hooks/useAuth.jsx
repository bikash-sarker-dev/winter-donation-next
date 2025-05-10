import { useContext } from "react";
import authContext from "../contextApi/authContextApi";

const Auth = () => {
  const catchValue = useContext(authContext);
  return catchValue;
};

export default Auth;
