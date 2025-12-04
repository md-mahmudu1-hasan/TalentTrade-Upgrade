import useData from '../../Hooks/useData';
import Loader from '../Loader';
import Skill from './Skill';

const Skills = () => {
 const {data, loading} = useData();

 if(loading){
    return <Loader></Loader>
 }
 
  return (
    <div>
        <h1 className='text-2xl font-bold text-center py-10 text-[#347928]'>Popular Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map(skill => <Skill key={skill.skillId} skill={skill}></Skill>)
            }
        </div>
    </div>
  )
}

export default Skills