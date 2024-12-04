import { blog } from "./data/blog";
import { contact } from "./data/contact";
import { navigation } from "./data/navigation";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { socialLinks } from "./data/social-links";
import { workExperiences } from "./data/work-experiences";
import { customPages } from "./data/custom-pages";

export const data = {
  profile,
  navigation,
  socialLinks,
  projects,
  contact,
  blog,
  workExperiences,
  skills: {
    top: profile.top_skills,
  },
  about: {
    description: profile.about,
  },
  customPages,
};
