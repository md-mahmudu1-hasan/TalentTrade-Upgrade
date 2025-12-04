import { CircleDollarSign, Star } from "lucide-react";
import { Link } from "react-router";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = ({ skill }) => {
 useEffect(() => {
    AOS.init({
      duration: 1000,     
    });
  }, []);


  return (
    <div>
      <div data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000" className="card bg-base-100 w-full shadow-xl p-2">
        <figure>
          <img className="h-64 w-full object-cover px-1 rounded" 
            src={skill.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {skill.skillName}
          </h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline bg-amber-300 text-white"><Star className="w-4 h-4 text-amber-500" />{skill.rating}</div>
            <div className="badge badge-outline bg-[#1d8e0a] text-white"><CircleDollarSign className="w-4 h-4 " /> {skill.price}$</div>
          </div>
          <Link to={`/skill/${skill.skillId}`} className="btn btn-outline bg-[#1d8e0a] text-white hover:bg-[#1d8e0a]/80 active:bg-[#1d8e0a]/60">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Skill;
