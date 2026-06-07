import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yerosen Tamrat — Frontend Developer & A2SV Member" },
      {
        name: "description",
        content:
          "CS student and A2SV member building clean, fast web experiences. Obsessed with DSA, UI detail, and writing code that just works. 100+ LeetCode problems solved.",
      },
      { property: "og:title", content: "Yerosen Tamrat — Frontend Developer" },
      {
        property: "og:description",
        content:
          "Frontend developer and A2SV Fellow open to internships and collaborative projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
