export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { label: "GPA", value: "3.93" },
  { label: "LeetCode", value: "100+" },
  { label: "Community", value: "A2SV" },
];

export const MARQUEE_ITEMS = [
  "HTML", "CSS", "JavaScript", "Python", "C++",
  "Responsive Design", "Git & GitHub", "Figma",
  "DSA & Algorithms", "A2SV Member", "100+ LeetCode", "Linux",
];

export const ABOUT_STATS = [
  { value: "100+", label: "LeetCode Problems" },
  { value: "3.93", label: "Current GPA" },
  { value: "3+", label: "Projects Shipped" },
  { value: "A2SV", label: "Community Member" },
];

export type SkillCategory = "languages" | "web" | "tools" | "core";

export const SKILLS: { name: string; category: SkillCategory; label: string }[] = [
  { name: "HTML", category: "languages", label: "Language" },
  { name: "CSS", category: "languages", label: "Language" },
  { name: "JavaScript", category: "languages", label: "Language" },
  { name: "Python", category: "languages", label: "Language" },
  { name: "C++", category: "languages", label: "Language" },
  { name: "Responsive Design", category: "web", label: "Web" },
  { name: "CSS Layouts", category: "web", label: "Web" },
  { name: "DOM Manipulation", category: "web", label: "Web" },
  { name: "Figma", category: "tools", label: "UI / Design" },
  { name: "Adobe Illustrator", category: "tools", label: "UI / Design" },
  { name: "Git & GitHub", category: "tools", label: "Tools" },
  { name: "Linux", category: "tools", label: "Tools" },
  { name: "VS Code", category: "tools", label: "Tools" },
  { name: "DSA / Algorithms", category: "core", label: "Core Area" },
  { name: "Problem Solving", category: "core", label: "Core Area" },
  { name: "Team Collaboration", category: "core", label: "Core Area" },
];

export type Project = {
  index: string;
  title: string;
  status: "COMPLETED" | "ONGOING";
  description: string;
  role: string;
  tech: string[];
  links?: { label: string; href: string }[];
  designProject?: boolean;
};

export const PROJECTS: Project[] = [
  {
    index: "/01",
    title: "Laura",
    status: "COMPLETED",
    description:
      "A full-featured streaming platform with real-time video playback, user authentication, and a content discovery feed. Built with a responsive UI that adapts seamlessly across devices, featuring smooth transitions and a cinema-quality dark interface.",
    role: "Lead Frontend Developer — UI architecture, video player integration, responsive layout system, and authentication flow.",
    tech: ["HTML", "CSS", "JavaScript", "Streaming", "UI/UX", "Auth"],
    links: [{ label: "Visit Website", href: "https://laura-drab.vercel.app/" }],
  },
  {
    index: "/02",
    title: "AI Pushup Fitness App",
    status: "ONGOING",
    description:
      "An AI-powered mobile fitness app that uses the phone camera for real-time posture detection during pushup exercises. Built collaboratively with a small cross-functional team.",
    role: "React Native Integration & App Glue — connecting components and architecting the camera API integration workflow.",
    tech: ["React Native", "AI / Pose Detection", "Camera API", "Mobile", "Team Project"],
  },
  {
    index: "/03",
    title: "E-commerce Marketplace",
    status: "ONGOING",
    description:
      "A fully responsive online marketplace inspired by Amazon. Features product listings, category-based navigation, cart functionality, and a clean UI built purely with HTML, CSS & JavaScript.",
    role: "Sole developer — UI architecture, product listing structure, category navigation, and frontend state management.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
  },
  {
    index: "/04",
    title: "Natours Landing Page",
    status: "COMPLETED",
    description:
      "A responsive single-page travel landing website focused on clean UI composition, animated sections, reusable Sass components, and scalable stylesheet architecture.",
    role: "Sole frontend developer — implemented semantic HTML structure, Sass 7-1 architecture, BEM-based styling, responsive layout, and CSS build workflow.",
    tech: ["HTML5", "Sass (SCSS)", "BEM", "Responsive Design", "Landing Page"],
  },
  {
    index: "/05",
    title: "AW Coffee Export — Brand Logo Design",
    status: "COMPLETED",
    designProject: true,
    description:
      "Designed a clean, scalable logo for AW Coffee Export that blends Ethiopian coffee heritage with a modern visual identity for web, packaging, and global brand use.",
    role: "Logo Designer — concept development, vector construction, brand identity exploration, and final scalable logo design for digital and print use.",
    tech: ["Figma", "Adobe Illustrator", "Brand Identity", "Logo Design", "Vector Design"],
    links: [
      { label: "Visit Website", href: "https://www.awcoffeeexport.com/" },
    ],
  },
];

export const EDUCATION = [
  {
    school: "American College of Technology",
    degree: "BSc in Computer Science",
    bullets: [
      "Addis Ababa, Ethiopia",
      "Expected Graduation: 2027",
      "Focus: DSA · Web Development · Digital Logic Design · Software Engineering",
      "Transferred from AASTU after first semester",
    ],
    badge: { label: "GPA", value: "3.93 / 4.0 ↑" },
  },
  {
    school: "A2SV (Africa to Silicon Valley)",
    degree: "Software Engineering Fellowship — G7 Batch",
    bullets: [
      "Remote Program",
      "Intensive training in Data Structures & Algorithms and problem solving",
      "Daily LeetCode practice and technical interview preparation",
      "Phase II: Building real-world software products in teams",
      "Collaboration with top African engineering students",
    ],
    badge: { label: "◆", value: "A2SV Fellow — G7 Batch" },
  },
];

export const CERTIFICATES = [
  {
    n: "01",
    title: "Advanced CSS and Sass: Flexbox, Grid and Animations",
    provider: "Udemy",
    status: "Completed",
  },
  {
    n: "02",
    title: "CS50: Introduction to Computer Science",
    provider: "Harvard University",
    status: "Ongoing",
  },
  {
    n: "03",
    title: "Full Stack Web Development Path",
    provider: "The Odin Project",
    status: "Ongoing",
  },
  {
    n: "04",
    title: "Agentic AI Development",
    provider: "ReadyTensor",
    status: "Ongoing",
  },
];

export const CONTACT = {
  email: "yerosentamrat4545@gmail.com",
  phone: "+251 945 235 859",
  location: "Addis Ababa, Ethiopia",
  resume:
    "https://drive.google.com/file/d/1_Ij7ORxW9osA7jhCAwSsTIfk3ieJgtm6/view?usp=sharing",
  mailtoUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=yerosentamrat4545@gmail.com",
};