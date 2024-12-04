import { blog } from "./data/blog";
import { contact } from "./data/contact";
import { navigation } from "./data/navigation";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { socialLinks } from "./data/social-links";
import { workExperiences } from "./data/work-experiences";
export const data = {
  profile,
  navigation,
  socialLinks,
  projects,
  contact,
  blog,
  workExperiences,
  skills: {
    top: [
      "Go",
      "Node.js",
      "Next.js",
      "React",
      "Typescript",
      "Postgres",
      "MongoDB",
      "Redis",
    ],
  },
  about: {
    description:
      "I am a software engineer with over 10 years of experience, skilled in all stages of software development, including analysis, design, coding, testing, and documentation. I have expertise in Go, C# (.Net Core), and JavaScript/TypeScript (Node.js, NestJs), along with experience in AI development(LLM, RAG, Agentic AI), and also good experience with React.js, Next.js, and databases like Postgres, MongoDB, and Redis. I am always eager to learn new skills and take on exciting challenges in the tech field.",
  },
};
