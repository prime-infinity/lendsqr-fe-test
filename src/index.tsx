import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import "./index.scss";
import Users from "./components/DashBoard/Components/Users";
import UserDetails from "./components/DashBoard/Components/UserDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="dashboard" element={<DashBoard />}>
        <Route index element={<Users />} />
        <Route path="user-details" element={<UserDetails />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
