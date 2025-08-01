import { Outlet, Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/errors/PageNotFound";
import Home from "../pages/home/Home";
import ContactUs from "../pages/contactUs/ContactUs";
import LandingPage from "../pages/landing/LandingPage";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import OrderManagement from "../pages/orderManagement/OrderManagement";
import About from "../pages/aboutUs/About";
import User from "../pages/users/User";
import CreateOrder from "../pages/orderManagement/CreateOrder";
import UpdateOrder from "../pages/orderManagement/UpdateOrder";

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
        <Route path="/order-management/create-order" element={<CreateOrder />} />
        <Route path="/order-management/update-order" element={<UpdateOrder />} />
      </Route>
    </Routes>
  );
};

export default Index;
