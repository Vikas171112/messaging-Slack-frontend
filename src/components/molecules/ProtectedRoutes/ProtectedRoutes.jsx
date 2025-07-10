import { useAuth } from "@/hooks/apis/auth/useAuth";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  if (auth.isLoading) {
    return <div>Loading .....</div>;
  }
  if (!auth.user || !auth.token) {
    return <Navigate to="/users/signin" />;
  }
  return children;
};
