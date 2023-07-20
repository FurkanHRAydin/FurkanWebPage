
import { skills } from "@/const/skills";
import SkillsCard from "../SkillsCard"

const SkillsBE = () => {
    return (
        <>
        <h3 className="py-4">Backend Development</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCard src={skills.jdbc.image} alt="/" title={skills.jdbc.title} />
          <SkillsCard src={skills.hibernate.image} alt="/" title={skills.hibernate.title}
          />
        </div>
      </>
    );
  };
  
  export default SkillsBE;