import { skills } from "@/const/skills";
import SkillsCard from "../SkillsCard"

const SkillsTools = () => {
    return (
        <>
        <h3 className="py-4">Tools</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCard src={skills.jira.image} alt="/" title={skills.jira.title} />
          <SkillsCard src={skills.linux.image} alt="/" title={skills.linux.title} />
          <SkillsCard src={skills.github1.image} alt="/" title={skills.github1.title}/>
        </div>
      </>
    );
  };
  
  export default SkillsTools;