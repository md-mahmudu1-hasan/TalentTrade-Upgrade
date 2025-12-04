import React, { useContext, useState } from "react";
import { useLocation} from "react-router";
import { AuthContext } from "../AuthContext";
import { toast } from "react-hot-toast";
import Loader from "../Loader";

const ForgetPassword = () => {
  const { resetPassword , loading , setLoading} = useContext(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");

  if(loading){
    return <Loader></Loader>
  }

  const handleReset = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset link sent! Check your Gmail.");
        window.location.href = "https://mail.google.com/";
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl border border-[#1d8e0a]">
        <h2 className="text-xl font-bold text-center mb-4 text-[#347928]">
          Reset Password
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#347928]"
        />

        <button
          target="_blank"
          onClick={handleReset}
          className="bg-[#347928] hover:bg-green-800 text-white font-semibold py-2 px-4 w-full rounded-md"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
