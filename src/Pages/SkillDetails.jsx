import { Link, useParams } from "react-router";
import useData from "../Hooks/useData";
import { Eye, EyeOff, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { use } from "react";
import { AuthContext } from "./AuthContext";
import { button } from "@material-tailwind/react";

const SkillDetails = () => {
  const { skillId } = useParams();
  const { data, loading, error } = useData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user } = use(AuthContext);

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const skill = data.find((skill) => skill.skillId === parseInt(skillId));

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    toast.success(`${skill.skillName} booked successfully`);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div data-aos="fade-up" className="bg-gray-100 py-10">
      <div data-aos="fade-up" className="mt-20 flex flex-col container mx-auto">
        <div data-aos="fade-up" className="p-6 md:w-[84%] w-full mx-auto">
          <div
            data-aos="fade-up"
            className="rounded-xl bg-white shadow-md overflow-hidden border border-[#1d8e0a]"
          >
            <div data-aos="fade-up" className="h-96 w-full">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="h-full p-2 rounded w-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">
                  {skill.skillName}
                </h1>
                <span className="bg-[#1d8e0a] text-white text-sm px-3 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>

              <div className="text-gray-600 font-medium flex justify-between">
                <p className=""> Instructor: {skill.providerName}</p>
                <a href={`mailto:${skill.providerEmail}`}>
                  Email: {skill.providerEmail}
                </a>
              </div>

              <div className="flex items-center mb-4 justify-between py-2">
                <div className="flex items-center mr-6">
                  <Star className="text-yellow-500 w-5 h-5 mr-1" />
                  <span className="text-gray-800 font-medium">
                    {skill.rating}
                  </span>
                </div>

                <p className="text-2xl font-semibold text-gray-800">
                  ${skill.price}
                </p>
              </div>
              <div className="text-gray-800 font-bold">
                Slots Available: {skill.slotsAvailable}
              </div>
              <p className="text-gray-700 mt-6">{skill.description}</p>
            </div>
          </div>
        </div>
        <form
          data-aos="fade-up"
          onSubmit={handleSubmit}
          className="h-full w-[80%] mx-auto bg-white my-5 py-5 px-10 rounded-xl shadow-md overflow-hidden flex flex-col gap-4 border border-[#1d8e0a]"
        >
          <h2 className="text-[#347928] text-center text-2xl font-bold mb-4">
            Book Session
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {!user ? (
            <Link
              to={!user && "/login"}
              className="p-3 text-center rounded-md bg-[#347928] text-white font-bold hover:bg-green-800 transition-colors"
            >
              Submit
            </Link>
          ) : (
            <button
              type="submit"
              className="p-3 rounded-md bg-[#347928] text-white font-bold hover:bg-green-800 transition-colors"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
