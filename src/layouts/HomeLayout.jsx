// layouts/HomeLayout.jsx .
import { Outlet } from "react-router-dom";
import TopNavbar from "../componentsForHome/TopNavbar.jsx";
import Banner from "../componentsForHome/Banner.jsx";
import Footer from "../components/Footer.jsx";

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */} 
      <TopNavbar />

   

      {/* Page Content */}
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}