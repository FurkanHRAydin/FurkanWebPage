
import { skills } from "@/const/skills";
import SkillsCard from "../SkillsCard"

const SkillsDataBase = () => {
    return (
        <>
        <h3 className="py-4">Database</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCard src={skills.sql.image} alt="/" title={skills.sql.title} />
        </div>
      </>
    );
  };
  
  export default SkillsDataBase;