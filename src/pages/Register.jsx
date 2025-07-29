import { Link } from "react-router-dom";

const Register = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
        Register
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Create a password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition"
        >
          Register
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-pink-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  </div>
);

export default Register;
