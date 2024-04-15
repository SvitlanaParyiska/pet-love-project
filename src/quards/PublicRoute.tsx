import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { selectIsLoggedIn } from "../redux/user/userSelectors";
import { useAppSelector } from "../hooks/useReduxHooks";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuth = useAppSelector(selectIsLoggedIn);
  const location = useLocation();

  return !isAuth ? children : <Navigate to={location.state ?? "/"} />;
};

export default PublicRoute;
