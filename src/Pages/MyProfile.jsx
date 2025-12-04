import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Pages/AuthContext";
import { Edit3, User, Mail } from "lucide-react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const MyProfile = () => {
  const { user , updateUserProfile , loading , setLoading } = use(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [edit, setEdit] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile(displayName, photoURL, user)
      .then(() => {
        setEdit(false);
        toast.success("Profile updated successfully");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  if(loading){
    return <span className="loading loading-spinner loading-xl"></span>
  }

  return (
    <>
    <title>My Profile</title>
      <div data-aos="fade-up" data-aos-offset="100" className="bg-gray-100 min-h-screen flex justify-center items-center py-10 mt-20">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-[#1d8e0a]">
          <h2 className="text-2xl font-bold text-center text-[#347928] mb-6">
            My Profile
          </h2>

          {edit ? (
            <form onSubmit={handleUpdate}
              className="flex flex-col gap-4 mt-4 text-gray-700"
            >
              <label className="font-semibold text-sm text-gray-600">
                New Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter new name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#347928]"
              />

              <label className="font-semibold text-sm text-gray-600">
                New Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter new photo URL"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#347928]"
              />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setEdit(false)}
                  className="px-5 py-2 rounded-full border border-gray-400 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#347928] text-white hover:bg-green-800 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <img
                src={user?.photoURL}
                alt="User Avatar"
                className="w-28 h-28 rounded-full border-4 border-[#347928] object-cover"
              />

              <div className="text-center">
                <p className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
                  <User size={18} /> {user?.displayName}
                </p>
                <p className="flex items-center justify-center gap-2 text-gray-600 text-sm mt-1">
                  <Mail size={18} /> {user?.email}
                </p>
              </div>

              <button
                onClick={() => setEdit(true)}
                className="mt-6 flex items-center gap-2 bg-[#347928] text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors font-semibold"
              >
                <Edit3 size={18} /> Update Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
