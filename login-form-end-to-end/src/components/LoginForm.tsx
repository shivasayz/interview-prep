import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6">Login Form</h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-400">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm mb-1 text-gray-400">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <a
            href="#"
            className="text-sm text-blue-500 hover:text-blue-400 transition"
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-6">
          Login
        </button>

        {/* Sign Up */}
        <p className="text-sm text-center text-gray-400">
          Don’t have an account?
          <Link
            to="signup"
            className="text-blue-500 hover:text-blue-400 font-medium transition"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
