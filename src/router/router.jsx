import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import UniversityDetails from "../pages/UniversityDetails.jsx";
import AddCustomer from "../componentsForHome/AddCustomer.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "universities/:slug", element: <UniversityDetails /> },
      { path: "add-customer", element: <AddCustomer /> },
    ],
  },
]);