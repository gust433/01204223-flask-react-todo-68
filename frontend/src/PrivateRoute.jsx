import { Navigate } from "react-router-dom";
import { useAuth } from "./context/Authcontext";

export default function PrivateRoute({ children }) {
  const { accessToken } = useAuth();
  return (accessToken ? children : <Navigate to="/login" replace />);
}