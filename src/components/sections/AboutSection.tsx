import { portfolioData } from "@/data/portfolio";

const AboutSection = () => {
  const { headline, paragraphs } = portfolioData.about;

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            {headline}
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-300 text-lg leading-relaxed hover:text-slate-200 transition-colors"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlight Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-700/50 border border-slate-600/50 rounded-lg hover:border-blue-500/30 transition-colors">
              <p className="text-3xl font-bold text-blue-400">4+</p>
              <p className="text-slate-300 text-sm mt-2">Years Experience</p>
            </div>
            <div className="p-6 bg-slate-700/50 border border-slate-600/50 rounded-lg hover:border-blue-500/30 transition-colors">
              <p className="text-3xl font-bold text-cyan-400">5+</p>
              <p className="text-slate-300 text-sm mt-2">Projects Delivered</p>
            </div>
            <div className="p-6 bg-slate-700/50 border border-slate-600/50 rounded-lg hover:border-blue-500/30 transition-colors">
              <p className="text-3xl font-bold text-blue-400">React</p>
              <p className="text-slate-300 text-sm mt-2">Frontend Development</p>
            </div>
            <div className="p-6 bg-slate-700/50 border border-slate-600/50 rounded-lg hover:border-blue-500/30 transition-colors">
              <p className="text-3xl font-bold text-cyan-400">AWS</p>
              <p className="text-slate-300 text-sm mt-2">Cloud Deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
