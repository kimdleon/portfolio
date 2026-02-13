import { portfolioData } from "@/data/portfolio";

const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300"
            >
              {/* Category Name */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {category.name}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-slate-300 text-center">
            <span className="font-semibold text-white">Specialization:</span> AI
            Integration, Cloud Architecture, Full Stack Development, DevOps
            Automation
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
