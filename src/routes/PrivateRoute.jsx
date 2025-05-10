import { Navigate } from "react-router";
import Auth from "./../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = Auth();

  if (user && user.email) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
