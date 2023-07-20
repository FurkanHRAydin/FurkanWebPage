import { skills } from "@/const/skills";
import SkillsCard from "../SkillsCard"

const SkillsFE = () => {
    return (
        <>
        <h3 className="py-4">Frontend Development</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsCard src={skills.nuxtjs.image} alt="/" title={skills.nuxtjs.title} />
          <SkillsCard src={skills.nextjs.image} alt="/" title={skills.nextjs.title}/>
          <SkillsCard src={skills.react.image} alt="/" title={skills.react.title}/>
          <SkillsCard src={skills.tailwind.image} alt="/" title={skills.tailwind.title}/>
          <SkillsCard src={skills.vue.image} alt="/" title={skills.vue.title}/>
          <SkillsCard src={skills.vuetify.image} alt="/" title={skills.vuetify.title}/>
          <SkillsCard src={skills.html.image} alt="/" title={skills.html.title}/>
          <SkillsCard src={skills.css.image} alt="/" title={skills.css.title}/>
        </div>
      </>
    );
  };
  
  export default SkillsFE;