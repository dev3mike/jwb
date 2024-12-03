import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { ContactPage } from "@/pages/contact";
import { ProjectsPage } from "@/pages/projects";
import { BlogPage } from "@/pages/blog";
import { BlogPostPage } from "@/pages/blog-post";
import "./App.css";
import { ProjectPage } from "./pages/project_page";
import { WorkExperiencesPage } from "./pages/work-experiences";

const profile = {
  name: "Masoud Banimahd",
  title: "Senior Software Engineer",
  status: "Building my startup 🚀",
  location: "Sweden",
  bio: "I am a software engineer with 10+ years of experience, skilled in all stages of the software development life cycle, including analysis, design, development, testing, and documentation.",
  links: [
    "Home",
    "Blog",
    "Projects",
    "Work Experiences",
    "Download Resume",
    "Contact",
  ],
  socialLinks: [
    "linkedin",
    "twitter",
    "medium",
    "facebook",
    "github",
    "youtube",
  ],
};

export default function Portfolio() {
  return (
    <Router>
      <main className="min-h-screen bg-background transition-colors duration-300">
        {/* Header - Mobile */}
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-4 md:hidden">
          <MobileNav {...profile} />
          <h1 className="text-xl font-bold">{profile.name}</h1>
        </header>

        <div className="p-4 lg:p-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[400px_1fr]">
            {/* Sidebar Component */}
            <Sidebar />

            {/* Main Content */}
            <div className="pt-6 lg:pt-0">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route
                  path="/work-experiences"
                  element={<WorkExperiencesPage />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}
