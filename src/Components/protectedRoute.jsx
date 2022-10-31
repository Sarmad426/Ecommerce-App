import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ user, children }) => {
  const { name } = user;
  if (!name) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
