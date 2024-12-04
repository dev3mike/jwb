/**
 * Profile data
 */
export const profile = {
  name: "John Doe", // Your name
  title: "Your title", // Your title
  status: "Available for hire", // Your status (e.g. Available for hire 🚀)
  status_theme: "green_pulse", // Options: green_pulse, red, grey, blue, gradient, purple, pink
  location: "Gothenburg, Sweden", // Your location (e.g. Gothenburg, Sweden)

  /**
   * Your bio will be displayed in the sidebar below your name
   */
  bio: "This is a short bio about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", // Your bio

  /**
   * Show avatar image in the sidebar
   * Add your avatar image to public/images/avatar.jpg
   * Recommended size: 800x800px
   * Set to false to hide
   */
  show_avatar_image: true,

  /**
   * Your top skills will be displayed in the "About Me" section in the home page
   */
  top_skills: [
    "Go",
    "Node.js",
    "Next.js",
    "React",
    "Typescript",
    "Postgres",
    "MongoDB",
    "Redis",
  ],

  /**
   * About you will be displayed in the "About Me" section in the home page
   * You can use html tags for formatting
   */
  about:
    "This is a short description about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
