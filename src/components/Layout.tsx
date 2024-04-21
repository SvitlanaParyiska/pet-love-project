import { Suspense } from "react";
import Loader from "./Loader";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useReduxHooks";
import { selectIsLoading } from "../redux/app/appSelectors";

function Layout() {
  const loading = useAppSelector(selectIsLoading);

  return (
    <>
      <Header />
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
