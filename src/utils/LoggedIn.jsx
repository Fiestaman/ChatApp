import { Navigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";

const LoggedIn = ({ children }) => {
  const { currentUser } = UseAuth();

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default LoggedIn;
