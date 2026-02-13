import { portfolioData } from "@/data/portfolio";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  EnvelopeIcon,
} from "@/components/Icons";

const ContactSection = () => {
  const { email, phone } = portfolioData.personal;
  const { social } = portfolioData;

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Let's Work Together
          </h2>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm always
            interested in hearing about new challenges.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group p-6 bg-slate-700/30 border border-slate-600/50 rounded-lg hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300 mb-4">
              <EnvelopeIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-slate-300 group-hover:text-blue-400 transition-colors">
              {email}
            </p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phone}`}
            className="group p-6 bg-slate-700/30 border border-slate-600/50 rounded-lg hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg group-hover:bg-cyan-500/20 transition-all duration-300 mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-slate-300 group-hover:text-cyan-400 transition-colors">
              {phone}
            </p>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={`mailto:${email}`}
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
