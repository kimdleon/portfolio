import {
  SiReact,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiAmazon,
  SiLaravel,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiPrisma,
  SiSelenium,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

interface TechIconProps {
  tech: string;
  className?: string;
}

const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  React: SiReact,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  MySQL: SiMysql,
  Bootstrap: SiBootstrap,
  "REST APIs": SiGit,
  AWS: SiAmazon,
  "AWS ECS": SiAmazon,
  "AWS (ECS, EC2, S3)": SiAmazon,
  Laravel: SiLaravel,
  Git: SiGit,
  GitHub: SiGithub,
  Bitbucket: SiBitbucket,
  "Prisma ORM": SiPrisma,
  Prisma: SiPrisma,
  Selenium: SiSelenium,
  "Selenium WebDriver": SiSelenium,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  "HTML5/CSS3": SiHtml5,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
};

export const TechIcon: React.FC<TechIconProps> = ({
  tech,
  className = "w-5 h-5",
}) => {
  const IconComponent = techIconMap[tech];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
};
