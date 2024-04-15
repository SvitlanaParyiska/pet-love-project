import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/useReduxHooks";
import { selectIsLoggedIn } from "../redux/user/userSelectors";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = useAppSelector(selectIsLoggedIn);
  const location = useLocation();

  return isAuth ? children : <Navigate to="/login" state={location} />;
};
export default PrivateRoute;
