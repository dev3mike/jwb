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
 * IMPORTANT: you can use html in the description
 *
 * You can have up to 3 links for each project
 * Set the link url to null if you don't want to show it
 *
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placehold.co/686x343/000000/FFFFFF/png?text=Hello+World",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
