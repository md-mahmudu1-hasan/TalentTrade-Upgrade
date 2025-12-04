import React, { use, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader";

const SignIn = () => {
  const { createUser, googleSignIn, loading} = use(AuthContext);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must have at least one uppercase, one lowercase, and be at least 6 characters long."
      );
      return;
    }

    setError("");
    setSuccess(false);

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("Sign up successfully");
            setSuccess(true);
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            if (error.code === "auth/invalid-photo-url") {
              setError("Invalid photo URL.");
            } else {
              setError(error.message);
            }
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email address.");
        } else if (error.code === "auth/weak-password") {
          setError("Password is too weak.");
        } else {
          setError(error.message);
        }
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then(() => {
        setSuccess(true);
        toast.success(`Sign Up successfully`);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message.split("or")[1]);
      })
  };

  return (
    <div data-aos="fade-up" className="bg-gray-100 py-4">
      <title>Sign Up</title>
      <div className="mt-25 px-4 container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="h-full md:max-w-3xl w-full mx-auto bg-white my-5 py-3 px-5 rounded-xl shadow-md overflow-hidden flex flex-col gap-4 border border-[#1d8e0a]"
        >
          <h2 className="text-[#347928] text-center text-2xl font-bold mb-4">
            Sign Up
          </h2>
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none"
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            required
          />
          <input
            type="email"
            name="email"
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

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Sign Up successfully !</p>}

          <button
            type="submit"
            className="p-3 rounded-2xl bg-[#347928] text-white font-bold hover:bg-green-800 transition-colors"
          >
            Sign Up
          </button>

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
              Sign Up with Google
            </span>
          </button>

          <div className="text-center pt-3">
            <p className="text-[#5f6c5c]">
              Already have an account?{" "}
              <Link className="text-[#2bc810] hover:text-[#1f6d16]" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
