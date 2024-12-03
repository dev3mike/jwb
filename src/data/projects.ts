/**
 * Projects data
 *
 * If you want to add a new project, add it to the list array.
 * If you want to add a new featured project, add it to the featured array.
 * IMPORTANT: the slug should be unique and url friendly
 * Always follow kebab case for the slug and have it short and in english
 * example: this-is-an-example-of-slug-in-lower-case
 *
 * IMPORTANT: either add a project to featured or list, not both
 */
export const projects = {
  /**
   * Show projects section in home page
   */
  show_projects_section_in_homepage: true,

  /**
   * Featured projects
   */
  featured: [
    {
      name: "Project Name",
      slug: "project-name",
      description: "Description Long Long Long Long Long Long Long Long Long",
      image:
        "https://files.4d.nu/9b4885c5-2acf-4ac7-ba35-790ba23a5ab7_256.webp",
      link_url: "https://www.google.com",
      link_text: "View Website",
      link2_url:
        "https://play.google.com/store/apps/details?id=com.example.app",
      link2_text: "Download Android App",
      link3_url: "https://apps.apple.com/app/example-app/id1234567890",
      link3_text: "Download iOS App",
      youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      technologies: ["Go", "Node.js", "Next.js", "React", "Typescript"],
    },
  ],

  /**
   * List of other projects
   */
  list: [
    {
      name: "AI-Powered Chatbot",
      slug: "ai-powered-chatbot",
      description:
        "A chatbot application that utilizes AI to provide instant responses and support to users.",
      image: null,
      link_url: "https://www.example.com/chatbot",
      link_text: "View Project",
      link2_url:
        "https://play.google.com/store/apps/details?id=com.example.app",
      link2_text: "Download Android App",
      link3_url: "https://apps.apple.com/app/example-app/id1234567890",
      link3_text: "Download iOS App",
      youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      technologies: ["Go", "Node.js", "Next.js", "React", "Typescript"],
    },
    {
      name: "E-commerce Platform",
      slug: "e-commerce-platform",
      description:
        "A full-featured e-commerce platform that allows users to buy and sell products online.",
      image: null,
      link_url: "https://www.example.com/ecommerce",
      link_text: "View Project",
      link2_url:
        "https://play.google.com/store/apps/details?id=com.example.app",
      link2_text: "Download Android App",
      link3_url: "https://apps.apple.com/app/example-app/id1234567890",
      link3_text: "Download iOS App",
      youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      technologies: ["Go", "Node.js", "Next.js", "React", "Typescript"],
    },
    {
      name: "Personal Finance Tracker",
      slug: "personal-finance-tracker",
      description:
        "An application designed to help users manage their finances and track their spending habits.",
      image: null,
      link_url: "https://www.example.com/finance-tracker",
      link_text: "View Project",
      link2_url:
        "https://play.google.com/store/apps/details?id=com.example.app",
      link2_text: "Download Android App",
      link3_url: "https://apps.apple.com/app/example-app/id1234567890",
      link3_text: "Download iOS App",
      youtube_url: null,
      technologies: ["Go", "Node.js", "Next.js", "React", "Typescript"],
    },
    {
      name: "Social Media Dashboard",
      slug: "social-media-dashboard",
      description:
        "A dashboard that aggregates social media feeds and analytics for easy management and insights.",
      image: null,
      link_url: "https://www.example.com/social-media-dashboard",
      link_text: "View Project",
      link2_url:
        "https://play.google.com/store/apps/details?id=com.example.app",
      link2_text: "Download Android App",
      link3_url: "https://apps.apple.com/app/example-app/id1234567890",
      link3_text: "Download iOS App",
      youtube_url: null,
      technologies: ["Go", "Node.js", "Next.js", "React", "Typescript"],
    },
  ],
};
