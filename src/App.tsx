import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import { HomePage } from "@/pages/home";
import { ContactPage } from "@/pages/contact";
import { ProjectsPage } from "@/pages/projects";
import { BlogPage } from "@/pages/blog";
import "./App.css";
import { ProjectPage } from "./pages/project-page";
import { WorkExperiencesPage } from "./pages/work-experiences";
import { CustomPage } from "./pages/custom-page";
import { useData } from "./hooks/useData";
import { cn } from "./lib/utils";
import { useMobile } from "./hooks/useMobile";
import { useEffect } from "react";

export default function Portfolio() {
  return (
    <Router>
      <PortfolioContents />
    </Router>
  );
}

function PortfolioContents() {
  const data = useData();
  const location = useLocation();
  const isMobile = useMobile();

  const isCustomPage = location.pathname.includes("/pages/");
  const hideSidebar =
    isCustomPage &&
    data.customPages.find(
      (page) => page.slug === location.pathname.split("/pages/")[1]
    )?.hide_sidebar;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      {/* Header - Mobile */}
      {!hideSidebar && (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/50 backdrop-blur-sm px-4 md:hidden">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-[-1px]">
              <Link to="/" className="hover:text-orange-500 text-orange-500">
                {data.profile.name}
              </Link>
            </h1>
            <span className="text-sm text-muted-foreground">
              {data.profile.title}
            </span>
          </div>
          <MobileNav />
        </header>
      )}

      <div className="p-4 lg:p-8">
        <div
          className={cn(
            "mx-auto grid max-w-6xl gap-8 lg:grid-cols-[400px_1fr]",
            hideSidebar && "lg:grid-cols-[1fr]"
          )}
        >
          {/* Sidebar Component */}
          {!hideSidebar && (
            <div className="hidden md:block">
              <Sidebar />
            </div>
          )}

          {/* Main Content */}
          <div className={cn("pt-6 lg:pt-0", isMobile && "pt-0 lg:pt-6")}>
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
              <Route path="/pages/:slug" element={<CustomPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}
