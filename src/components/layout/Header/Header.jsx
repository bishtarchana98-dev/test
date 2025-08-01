import { Link } from "react-router-dom";
import { MdLogout } from "../../../icons/Icons";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import apiClient from "../../../api/apiClient";
import { showErrorAlert } from "../../alert/alertService";

const Header = () => {
  const ROLE = localStorage.getItem("role");

  const userData = JSON.parse(localStorage.getItem("user"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  const teamLeadData = JSON.parse(localStorage.getItem("teamLead"));

  // console.log(userData?.role == "UserAccount", adminData, teamLeadData);
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogout = async () => {
    try {
      let endpoint = "";
      if (ROLE === "admin") {
        endpoint = "auth/admin/logout";
      } else if (ROLE === "team lead") {
        endpoint = "auth/teamlead/logout";
      } else if(userData?.role == "UserAccount") {
        endpoint = "auth/useraccount/logout";
      }
      const response = await apiClient.get(endpoint);
      console.log("response>>", response);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error (e.g., show a toast notification)
      showErrorAlert("Logout failed. Please try again.");
    }
  };
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex items-center w-full">
        {/* Logo */}
        <h1 className="text-xl font-bold flex-1">My Website</h1>

        {/* Mobile Menu Toggle (Hamburger icon) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <IoIosArrowDropdown size={25} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/setting" className="hover:text-gray-300">
                Settings
              </Link>
            </li>
            <li>
              <img
                className="rounded-full object-cover border-2 border-white"
                alt="user-profile"
                src="/images/user-profile.jpg"
                height={32}
                width={32}
                style={{ width: 32, height: 32 }}
              />
            </li>
            <li className="flex flex-col items-center">
              <Link className="hover:text-black flex items-center" to="/login">
                <MdLogout size={20} />
              </Link>
              <small className="text-xs cursor:pointer">Logout</small>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-16 right-0 text-right w-full bg-blue-600 text-white p-4">
            <ul className="space-y-4 text-right">
              <li>
                <div className="flex item-center justify-end space-x-4">
                  <Link
                    to="/contact-us"
                    className="block py-2 px-4 hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Settings
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-end space-x-4">
                  <img
                    className="rounded-full"
                    alt="user-profile"
                    src="/images/user-profile.jpg"
                    height={30}
                    width={30}
                  />
                </div>
              </li>
              <li className="cursor:pointer flex items-center justify-end space-x-2">
                <Link className="hover:text-black">
                  <MdLogout size={25} />
                </Link>
                Logout
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
