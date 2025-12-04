import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { use } from "react";
import { AuthContext } from "../AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader";

const Login = () => {
  const { signIn, googleSignIn, loading , setLoading } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate(); 


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  if(loading){
    return <Loader></Loader>
  }

  const handleSubmit = (e) => {
    setError("");
    setSuccess(false);

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then(() => {
        setSuccess(true);
        toast.success(`Login successfully`);
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch((error) => {
        setError(error.message.split("or")[1]);
        setLoading(false)
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    setError("");
    setSuccess(false);
    googleSignIn()
      .then((res) => {
        setSuccess(true);
        toast.success(`${res.user.displayName} Login successfully`);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        setError(error.message.split("or")[1]);
      });
  };

  return (
    <div data-aos="fade-up" className="bg-gray-100 py-10">
      <title>Login</title>
      <div className="mt-30 px-4 container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="h-full md:max-w-3xl w-full mx-auto bg-white my-5 py-5 px-5 rounded-xl shadow-md overflow-hidden flex flex-col gap-4 border border-[#1d8e0a]"
        >
          <h2 className="text-[#347928] text-center text-2xl font-bold mb-4">
            Login
          </h2>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="p-3 w-full rounded-md border border-gray-300 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-3 text-gray-500 hover:text-[#347928] transition"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
          <div>
            <Link
              state={{ email }}
              className="text-xs pl-1 text-right hover:text-[#1f6d16]"
              to="/forget-password"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="p-3 rounded-2xl bg-[#347928] text-white font-bold hover:bg-green-800 transition-colors"
          >
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">Log in successfully !</p>
          )}

          <div className="text-center text-[#5f6c5c] text-xs flex items-center justify-center">
            <hr className="w-1/2 border border-gray-300" />
            <span className="px-2">or</span>
            <hr className="w-1/2 border border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-300"
          >
            <FcGoogle size={24} />
            <span className="text-gray-700 font-semibold">
              Continue with Google
            </span>
          </button>
          <div className="text-center pt-3">
            <p className="text-[#5f6c5c]">
              Don't have an account?{" "}
              <Link
                className="text-[#2bc810] hover:text-[#1f6d16]"
                to="/sign-in"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
