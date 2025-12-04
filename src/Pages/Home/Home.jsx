import App from "./HeroSlider";
import HowItWorks from "./Howtowork";
import OurSuccess from "./Oursuccess";
import Skills from "./Skills";
import TopRatedProviders from "./TopRated";
import Loader from "../Loader";
import useData from "../../Hooks/useData";

const Home = () => {
  const {loading} = useData();

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <App></App>
        <Skills></Skills>
        <TopRatedProviders></TopRatedProviders>
        <HowItWorks></HowItWorks>
        <OurSuccess></OurSuccess>
      </div>
    </div>
  );
};

export default Home;
