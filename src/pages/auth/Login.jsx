import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, IoHome } from "../../icons/Icons";
import apiClient from "../../api/apiClient";
import { showSuccessAlert } from "../../components/alert/alertService";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!state.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(state.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!state.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await apiClient.post("auth/login", state);

      if (response?.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // toast.success("Login successful!");
        // showSuccessAlert("Login successful!", "Welcome back!");
        showSuccessAlert("Signed in successfully!");
        navigate("/home");
      }
    } catch (error) {
      // toast.error(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700">
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white text-blue-800 border border-blue-800 px-4 py-1 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition"
      >
        <IoHome />
      </Link>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-400" : "focus:ring-blue-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={state.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-400" : "focus:ring-blue-300"
              } pr-12`} // Add right padding for icon space
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="cursor-pointer absolute top-14 right-3 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-700 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
