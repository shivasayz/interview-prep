import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fullname: z.string().nonempty("Full name should not be empty"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be 8 character long"),
  confirmPassword: z.string().min(8, "Password must be 8 character long"),
});

type formFields = z.infer<typeof schema>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });

  const formSubmit = async (data: formFields) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-400">
              Full Name
            </label>
            <input
              {...register("fullname")}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
            <div className="text-red-500 text-sm mt-1">
              {errors.fullname?.message}
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-400">Email</label>
            <input
              {...register("email")}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <div className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-400">Password</label>
            <input
              {...register("password")}
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
            />
            <div className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm mb-1 text-gray-400">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
            <div className="text-red-500 text-sm mt-1">
              {errors.confirmPassword?.message}
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mb-6 flex items-center justify-center gap-2"
            disabled={isSubmitting} // optional: prevent double clicks
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Already have account */}
        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-400 font-medium transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
