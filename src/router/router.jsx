import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout.jsx";




import AddCustomer from "../componentsForHome/AddCustomer.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,   // ✅ Layout with TopNavbar + Outlet
    children: [
      { path: "add-customer", element: <AddCustomer /> },
    ],
  },
]);