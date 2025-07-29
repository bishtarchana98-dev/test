// import { Link } from "react-router-dom";

// // Animated background using absolute positioned colored blobs
// const AnimatedBackground = () => (
//   <div className="absolute inset-0 -z-10 overflow-hidden">
//     <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-400 opacity-60 rounded-full filter blur-3xl animate-pulse"></div>
//     <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-blue-400 opacity-60 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
//     <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 opacity-50 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
//     <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-yellow-400 opacity-40 rounded-full filter blur-3xl animate-pulse animation-delay-3000"></div>
//   </div>
// );

// const LandingPage = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
//       <AnimatedBackground />
//       <div className="relative z-10 text-center px-4 py-12">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">
//           Welcome to Our Platform
//         </h1>
//         <p className="text-lg md:text-2xl text-white mb-8 animate-fade-in">
//           Experience the future. Join us today and unlock amazing features!
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             to="/login"
//             className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:bg-blue-100 transition text-lg"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold shadow-lg hover:from-pink-600 hover:to-yellow-500 transition text-lg"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
/// Bright in ccolour pink and blue with animated blobs>>>>>>>>>>>>>>>>>>>>>>>>

// import { Link } from "react-router-dom";

// // Sample order/history data
// const orders = [
//   {
//     id: "ORD001",
//     item: "Wireless Headphones",
//     date: "2025-07-20",
//     status: "Delivered",
//   },
//   {
//     id: "ORD002",
//     item: "Smart Watch",
//     date: "2025-07-22",
//     status: "Processing",
//   },
//   {
//     id: "ORD003",
//     item: "Bluetooth Speaker",
//     date: "2025-07-25",
//     status: "Shipped",
//   },
// ];

// // Animated background using absolute positioned colored blobs
// const AnimatedBackground = () => (
//   <div className="absolute inset-0 -z-10 overflow-hidden">
//     <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-400 opacity-60 rounded-full filter blur-3xl animate-pulse"></div>
//     <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-blue-400 opacity-60 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
//     <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 opacity-50 rounded-full filter blur-3xl animate-pulse animation-delay-1000"></div>
//     <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-yellow-400 opacity-40 rounded-full filter blur-3xl animate-pulse animation-delay-3000"></div>
//   </div>
// );

// // Navbar component
// const Navbar = () => (
//   <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/20 backdrop-blur-md shadow-lg fixed top-0 left-0 z-20">
//     <span className="text-2xl font-bold text-white drop-shadow">
//       Sphere Demo
//     </span>
//     <div className="flex gap-4">
//       <Link
//         // to="/login"
//         className="px-5 py-2 rounded-full bg-white text-blue-600 font-semibold shadow hover:bg-blue-100 transition"
//       >
//         Login
//       </Link>
//       <Link
//         // to="/register"
//         className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold shadow hover:from-pink-600 hover:to-yellow-500 transition"
//       >
//         Register
//       </Link>
//     </div>
//   </nav>
// );

// // Footer component
// const Footer = () => (
//   <footer className="w-full text-center py-4 bg-white/10 text-white mt-12">
//     &copy; {new Date().getFullYear()} Sphere Demo. All rights reserved.
//   </footer>
// );

// const LandingPage = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
//       <AnimatedBackground />
//       <Navbar />
//       <main className="flex flex-col items-center justify-center flex-1 pt-32 pb-8 px-4">
//         <div className="relative z-10 text-center mb-10">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">
//             Welcome to Our Platform
//           </h1>
//           <p className="text-lg md:text-2xl text-white mb-8 animate-fade-in">
//             Experience the future. Join us today and unlock amazing features!
//           </p>
//         </div>
//         {/* <div className="relative z-10 w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-6 backdrop-blur-md">
//           <h2 className="text-2xl font-bold text-blue-700 mb-4">
//             Your Recent Orders
//           </h2>
//           <table className="w-full text-left">
//             <thead>
//               <tr className="text-blue-600">
//                 <th className="py-2">Order ID</th>
//                 <th className="py-2">Item</th>
//                 <th className="py-2">Date</th>
//                 <th className="py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr
//                   key={order.id}
//                   className="border-b border-blue-100 hover:bg-blue-50/40 transition"
//                 >
//                   <td className="py-2">{order.id}</td>
//                   <td className="py-2">{order.item}</td>
//                   <td className="py-2">{order.date}</td>
//                   <td className="py-2">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         order.status === "Delivered"
//                           ? "bg-green-200 text-green-700"
//                           : order.status === "Processing"
//                           ? "bg-yellow-200 text-yellow-700"
//                           : "bg-blue-200 text-blue-700"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div> */}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

import { Link } from "react-router-dom";

// Sample order/history data
const orders = [
  {
    id: "ORD001",
    item: "Wireless Headphones",
    date: "2025-07-20",
    status: "Delivered",
  },
  {
    id: "ORD002",
    item: "Smart Watch",
    date: "2025-07-22",
    status: "Processing",
  },
  {
    id: "ORD003",
    item: "Bluetooth Speaker",
    date: "2025-07-25",
    status: "Shipped",
  },
];

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
    <span className="text-2xl font-bold text-indigo-700">Sphere Demo</span>
    <div className="flex gap-4">
      <Link
        // to="/login"
        className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
      >
        Login
      </Link>
      <Link
        // to="/register"
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
    &copy; {new Date().getFullYear()} Sphere Demo. All rights reserved.
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
        {/* <div className="relative z-10 w-full max-w-2xl bg-white/90 rounded-xl shadow-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Your Recent Orders
          </h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-indigo-600">
                <th className="py-2">Order ID</th>
                <th className="py-2">Item</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-indigo-50 transition"
                >
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">{order.item}</td>
                  <td className="py-2">{order.date}</td>
                  <td className="py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
