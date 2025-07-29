// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         // You can add custom colors here, or ensure the default red and blue exist
//         red: {
//           100: "#fee2e2",
//           200: "#feb2b2",
//           500: "#f56565", // Standard red
//         },
//         blue: {
//           100: "#cce4ff",
//           200: "#99ccff",
//           500: "#3182ce", // Standard blue
//         },
//       },
//     },
//   },
//   plugins: [],
// };


module.exports = {
  theme: {
    extend: {
      animation: {
        'move-card': 'moveCard 3s ease-in-out infinite',
      },
      keyframes: {
        moveCard: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
};
