
//   // Find function >>>>>>
//   // incorrect find needs a callback function
//   const array = new Array(2).fill(null).map((_, i) => ({
//     name: i === 0 ? "Alice" : "Bob",
//   }));
//   const found = array.find((obj) => obj.name === "Alice");
//   console.log(found); // { name: "Alice" }

// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Index from "./routeFile/Index";

// const App = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />

//       <div className="flex flex-1 overflow-hidden h-full">
//         {/* <div className="w-64"> */}
//         <Sidebar />
//         {/* </div> */}

//         <main className="flex-1 p-8 overflow-y-auto bg-gray-50">
//           <Index />
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Index from "./routeFile/Index";

// const App = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-gray-50">
//           <Index />
//         </main>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default App;

import Index from "./routeFile/Index";

const App = () => {
  return <Index />;
};

export default App;
