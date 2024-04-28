import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout";
import PrivateRoute from "../quards/PrivateRoute";
import PublicRoute from "../quards/PublicRoute";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material";

const Home = lazy(() => import("../pages/HomePage"));
const News = lazy(() => import("../pages/NewsPage"));
const Notices = lazy(() => import("../pages/NoticesPage"));
const OurFriends = lazy(() => import("../pages/OurFriendsPage"));
const Registration = lazy(() => import("../pages/RegistrationPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Profile = lazy(() => import("../pages/ProfilePage"));
const AddPet = lazy(() => import("../pages/AddPetPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="notices" element={<Notices />} />
          <Route path="friends" element={<OurFriends />} />
          <Route
            path="registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="add-pet"
            element={
              <PrivateRoute>
                <AddPet />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
