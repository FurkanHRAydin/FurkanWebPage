
import { skills } from "@/const/skills";
import SkillsCard from "../SkillsCard"

const SkillsLangugage = () => {
    return (
        <>
        <h3 className="py-4">Language</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCard src={skills.java.image} alt="/" title={skills.java.title} />
          <SkillsCard src={skills.cpp.image} alt="/" title={skills.cpp.title}/>
          <SkillsCard src={skills.javascript.image} alt="/" title={skills.javascript.title}/>
          <SkillsCard src={skills.typescript.image} alt="/" title={skills.typescript.title}/>
        </div>
      </>
    );
  };
  
  export default SkillsLangugage;