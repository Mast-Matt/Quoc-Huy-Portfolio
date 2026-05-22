export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  stack: string[];
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "NashTech Vietnam",
    location: "Ho Chi Minh City, VN",
    period: "Apr 2025 – Aug 2025",
    stack: [
      "Next.js",
      "React",
      "TailwindCSS",
      "FastAPI",
      "Azure",
      "OpenAI Agent SDK",
    ],
    bullets: [
      "Built the front-end architecture of an intelligent multi-agent chatbot system in Next.js + React + TailwindCSS, integrated with a FastAPI backend.",
      "Implemented multi-agent interaction flows with the OpenAI Agent SDK — routing user queries, invoking tools, and answering against a corpus of 10,000+ indexed documents.",
      "Shipped an AI-to-human handoff workflow with queue-based routing and context preservation, cutting unintentional or misrouted escalations by an estimated 40%.",
      "Collaborated with backend engineers to integrate APIs, optimize request handling, and keep front-end performance smooth in Azure-hosted environments.",
      "Showcased the system at the 2025 Capstone Project Showcase as an example of enterprise-ready AI-human collaboration.",
    ],
  },
  {
    role: "Web Developer",
    company: "HR1 Vietnam Holdings",
    location: "Ho Chi Minh City, VN",
    period: "May 2024 – Aug 2024",
    stack: ["Smarty", "PHP", "JavaScript", "Figma"],
    bullets: [
      "Developed the front-end for the company site using Smarty, PHP, and JavaScript.",
      "Worked with designers to bring Figma UIs onto the live server, matching spec across breakpoints.",
      "Implemented responsive interfaces with consistent cross-browser and mobile compatibility.",
    ],
  },
];
