import { portfolioData } from "@/data/portfolio";
import { ExternalLinkIcon, GitHubIcon } from "@/components/Icons";
import { TechIcon } from "@/components/TechIcon";

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Projects
          </h2>
          <p className="text-slate-300 mt-4">
            A selection of carefully crafted projects showcasing my expertise in
            full stack development and AI integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-700/30 border border-slate-600/50 rounded-lg overflow-hidden hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300"
            >
              {/* Image Thumbnail */}
              {project.image && (
                <div className="h-40 relative overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              {/* Content */}
              <div className="p-6 relative z-10">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-slate-300 hover:text-blue-400 transition-colors" title={tech}>
                      <TechIcon tech={tech} className="w-6 h-6" />
                    </div>
                  ))}
                </div>

                {/* Links and Year - Justified */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        <ExternalLinkIcon />
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        <GitHubIcon />
                        Repository
                      </a>
                    )}
                  </div>
                  {project.year && (
                    <span className="px-2 py-1 bg-blue-600/80 text-blue-100 rounded-full text-xs font-semibold">
                      {project.year}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
