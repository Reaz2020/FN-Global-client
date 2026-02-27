// components/TopNavbar.jsx
import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-10 shadow-sm">
      
      {/* Left: Logo + Company Name */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
          FN
        </div>
        <span className="text-2xl font-semibold text-gray-800">
          FN Global
        </span>
      </Link>

      {/* Right: Menu */}
      <nav className="flex items-center gap-8 text-gray-600 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600 transition">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-blue-600 transition">
          Contact Us
        </Link>
      </nav>

    </header>
  );
}