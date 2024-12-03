import { blog } from "./data/blog";
import { contact } from "./data/contact";
import { navigation } from "./data/navigation";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { socialLinks } from "./data/social-links";
export const data = {
  profile,
  navigation,
  socialLinks,
  projects,
  contact,
  blog,
  workExperience: [
    {
      title: "Senior Backend Engineer",
      company: {
        name: "Agreena",
        url: "https://www.agreena.com",
      },
      location: "Copenhagen, Denmark",
      dateRange: "2021-Now",
      description: "Description Long Long Long Long Long Long Long Long Long",
      achievements: [
        "Led the development of core platform features",
        "Improved system performance by 40%",
        "Implemented automated testing pipeline",
      ],
    },
    {
      title: "Lead Software Engineer",
      company: {
        name: "Previous Company",
        url: "https://www.example.com",
      },
      location: "Remote",
      dateRange: "2019-2021",
      description: "Led development teams and architected scalable solutions",
      achievements: [
        "Managed a team of 5 developers",
        "Reduced deployment time by 60%",
        "Implemented microservices architecture",
      ],
    },
    {
      title: "Full Stack Developer",
      company: {
        name: "Another Company",
        url: "https://www.example2.com",
      },
      location: "Tehran, Iran",
      dateRange: "2017-2019",
      description: "Full stack development with focus on web applications",
      achievements: [
        "Developed and maintained multiple client projects",
        "Implemented responsive design system",
        "Reduced loading times by 50%",
      ],
    },
  ],
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
