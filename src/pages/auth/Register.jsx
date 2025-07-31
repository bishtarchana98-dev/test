import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, IoHome } from "../../icons/Icons";
import apiClient from "../../api/apiClient";

const Register = () => {
  const navigate = useNavigate();
  // const [toastId, setToastId] = useState(null);
  const [selectedRole, setSelectedRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSelectChange = (e) => {
    setSelectedRole(e.target.value);
    setErrors({ ...errors, role: "" });
  };
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!selectedRole) newErrors.role = "Role is required";

    if (!state.name.trim()) newErrors.name = "Name is required";

    if (!state.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(state.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!state.password.trim()) {
      newErrors.password = "Password is required";
    }
    //  else if (state.password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters";
    // }

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
      let endpoint = "";

      if (selectedRole === "user") {
        endpoint = "auth/useraccount/register";
      } else if (selectedRole === "team lead") {
        endpoint = "auth/teamlead/register";
      } else if (selectedRole === "admin") {
        endpoint = "auth/admin/register";
      } else {
        toast.error("Invalid role selected.");
        return;
      }

      const response = await apiClient.post(endpoint, state);

      if (response.status === 201) {
        console.log("Registration successful:", response.data);
        navigate("/login");
        // toast.success("Registration successful! Please login.");
      } else {
        // toast.error("Registration failed. Try again.");
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Registration failed. Try again.";
      console.error("Registration error:", message);
      // toast.error(message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-700">
        <Link
          to="/"
          className="absolute top-4 left-4 bg-white text-blue-800 border border-blue-800 px-4 py-1 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition"
        >
          <IoHome />
        </Link>

        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Register
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Select Role Section */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Role
              </label>
              <select
                value={selectedRole}
                onChange={handleSelectChange}
                className="cursor-pointer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="admin">Admin</option>
                <option value="team lead">Team Lead</option>
                <option value="user">User</option>
              </select>

              {/* Show selected role */}
              {selectedRole && (
                <div className="flex item-center justify-center mt-2 text-red-600 font-medium">
                  <h4 className="text-5gl font-bold">
                    Registering as{" "}
                    <span className="capitalize">{selectedRole}</span>
                  </h4>
                </div>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-400" : "focus:ring-blue-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

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
                className={`w-full px-4 py-3 pr-12 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password ? "focus:ring-red-400" : "focus:ring-blue-300"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="cursor-pointer absolute top-14 right-3 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-800 text-gray-100 font-semibold rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
