import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BsInfoCircle,
  BsTelephoneOutbound,
  FiUsers,
  IoHomeOutline,
  LuBox,
} from "../icons/Icons";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // return isMobile;

  return (
    <>
      {/* Button to toggle sidebar visibility on small screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 text-white absolute top-4 left-4 z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed inset-y-0 left-0 z-20 transition-transform transform bg-gray-800 text-white w-64 p-6 md:h-screen`}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-3 mb-6 border-b border-gray-700 pb-4">
          <img
            className="h-10 w-10"
            alt="Logo"
            style={{ height: 60, width: 60 }}
            src="/public/images/global-logo.jpg"
          />
          <h1 className="text-xl font-bold">Demo Web</h1>
        </div>

        {/* Navigation */}
        <ul className="space-y-3">
          <li>
            <Link
              to="/home"
              className="flex items-center justify-start space-x-3 
                 bg-gray-700 hover:bg-gray-600 
                 p-3 rounded-lg transition duration-300 
                 text-white"
            >
              <IoHomeOutline className="text-white" size={22} />
              {/* {!isMobile &&} */}

              <span className="font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center justify-start space-x-3 
                 bg-gray-700 hover:bg-gray-600 
                 p-3 rounded-lg transition duration-300 
                 text-white"
            >
              <span className="text-white text-xl">
                <BsInfoCircle size={20} />
              </span>
              {/* {!isMobile &&  } */}
              <span className="font-medium">About Us</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="flex items-center justify-start space-x-3 
                 bg-gray-700 hover:bg-gray-600 
                 p-3 rounded-lg transition duration-300 
                 text-white"
            >
              <BsTelephoneOutbound className="text-white" size={20} />
              {/* {!isMobile &&  */}
              <span className="font-medium">Contact Us</span>
              {/* // } */}
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className="flex items-center justify-start space-x-3 
                 bg-gray-700 hover:bg-gray-600 
                 p-3 rounded-lg transition duration-300 
                 text-white"
            >
              <FiUsers className="text-white" size={24} />
              {/* {!isMobile &&  */}
              <span className="font-medium">User</span>
              {/* // } */}
            </Link>
          </li>
          <li>
            <Link
              to="/order-management"
              className="flex items-center justify-start space-x-3 
                 bg-gray-700 hover:bg-gray-600 
                 p-3 rounded-lg transition duration-300 
                 text-white"
            >
              <LuBox  className="text-white" size={22} />
              {/* {!isMobile &&  */}
              <span className="font-medium">Order Management</span>
              {/* // } */}
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile view when sidebar is open */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:hidden fixed inset-0 bg-black bg-opacity-50 z-10`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
