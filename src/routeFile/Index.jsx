// import { Route, Routes } from "react-router-dom";
// import About from "../pages/About";
// import PageNotFound from "../pages/PageNotFound";
// import Home from "../pages/Home";
// import ContactUs from "../pages/ContactUs";
// import LandingPage from "../pages/LandingPage";

// const Index = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact-us" element={<ContactUs />} />

//       <Route path="/*" element={<PageNotFound />} />
//     </Routes>
//   );
// };

// export default Index;

import { Outlet, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import LandingPage from "../pages/LandingPage";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import OrderManagement from "../pages/OrderManagement";

// Layout for all pages except landing
const MainLayout = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
    <Footer />
  </div>
);

const Index = () => {
  return (
    <Routes>
      {/* Landing page without layout */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />

      {/* All other pages with layout */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/user" element={<User />} />
        <Route path="/order-management" element={<OrderManagement />} />
      </Route>
    </Routes>
  );
};

export default Index;
