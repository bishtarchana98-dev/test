import { Link } from "react-router-dom";

// Muted animated background
const AnimatedBackground = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-blue-50 to-gray-100">
    <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-indigo-200 opacity-30 rounded-full filter blur-2xl"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-blue-200 opacity-30 rounded-full filter blur-2xl"></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200 opacity-20 rounded-full filter blur-2xl"></div>
    <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-teal-200 opacity-20 rounded-full filter blur-2xl"></div>
  </div>
);

// Navbar component
const Navbar = () => (
  <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/80 shadow-md fixed top-0 left-0 z-20 backdrop-blur">
    <span className="text-2xl font-bold text-indigo-700">Order Management</span>
    <div className="flex gap-4">
      <Link
        to="/login"
        className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-5 py-2 rounded-full bg-blue-100 text-indigo-700 font-semibold shadow hover:bg-blue-200 transition"
      >
        Register
      </Link>
    </div>
  </nav>
);

// Footer component
const Footer = () => (
  <footer className="w-full text-center py-4 bg-white/80 text-gray-500 shadow-inner mt-12">
    &copy; {new Date().getFullYear()} Order Management System. All rights reserved.
  </footer>
);

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gray-50">
      <AnimatedBackground />
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 pt-32 pb-8 px-4">
        <div className="relative z-10 text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 mb-4 drop-shadow">
            Welcome to Our Platform
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">
            Experience the future. Join us today and unlock amazing features!
          </p>
        </div>
        <div>
          <img
            alt=""
            src="/images/landing-banner.jpg"
            style={{ height: "700px" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
