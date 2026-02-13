import { portfolioData } from "@/data/portfolio";

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Experience
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="relative pl-6 md:pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-4 top-2 w-6 h-6 bg-slate-900 border-2 border-blue-500 rounded-full" />

              {/* Content */}
              <div className="group hover:bg-slate-800/50 p-6 rounded-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-blue-400 font-semibold">{item.company}</p>
                  </div>
                  <p className="text-slate-400 text-sm md:text-right md:whitespace-nowrap">
                    {item.period}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium hover:border-blue-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
