import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name } = portfolioData.personal;

  return (
    <footer className="py-8 px-4 md:px-6 lg:px-8 bg-slate-950 border-t border-slate-700/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} {name}. All rights reserved.
          </p>

          {/* Built With */}
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            Built with{" "}
            <span className="text-red-400">♥</span> using Next.js, TypeScript &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
