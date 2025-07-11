import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages";
import AuthPage from "../pages/auth";
import AuthLayout from "../pages/auth/Layout";
import App from "../pages/app";
import AppLayout from "../pages/app/Layout";
import ServerDown from "../pages/serverDown";
import UserProvider from "../providers/UserProvider";
import SocketProvider from "../providers/SocketProvider";
import ChatsProvider from "../providers/ChatsProvider";
import ModalProvider from "../providers/ModalProvider";
import UpcomingFeatureProvider from "../providers/UpcomingFeatureProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
      </Route>

      {/*TODO: MAKE IT LOOK FINE */}
      <Route
        path="/app"
        element={
          <UserProvider>
            <SocketProvider>
              <ChatsProvider>
                <ModalProvider>
                  <UpcomingFeatureProvider>
                    <AppLayout />
                  </UpcomingFeatureProvider>
                </ModalProvider>
              </ChatsProvider>
            </SocketProvider>
          </UserProvider>
        }
      >
        <Route index element={<App />} />
      </Route>
      <Route path="/server-down">
        <Route index element={<ServerDown />} />
      </Route>
    </>,
  ),
);

export default router;
