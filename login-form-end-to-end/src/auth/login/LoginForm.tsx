import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email().nonempty("email must required"),
  password: z.string().min(8, "password must required"),
});

type formFields = z.infer<typeof schema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });

  const formSubmit: SubmitHandler<formFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6">Login Form</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-400">Email</label>
            <input
              {...register("email")}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="text-red-500 text-sm mt-1">
            {errors.email?.message}
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm mb-1 text-gray-400">Password</label>
            <input
              {...register("password")}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-red-500 text-sm mt-1">
            {errors.password?.message}
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-sm m-2 text-center text-gray-400">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-400 font-medium transition ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
