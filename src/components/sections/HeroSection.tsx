import { portfolioData } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

const HeroSection = () => {
  const { name, title, summary } = portfolioData.personal;
  const { social } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in-up">
          {name}
        </h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
          {title}
        </p>

        {/* Summary */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          {summary}
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            View Projects
          </a>
          <a
            href="/Resume-KimDeLeon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center animate-fade-in-up">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
