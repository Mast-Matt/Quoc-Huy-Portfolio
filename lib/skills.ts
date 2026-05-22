export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Swift",
      "PHP",
      "SQL (MySQL)",
      "HTML / CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "Next.js",
      "React",
      "React Native (Expo)",
      "Node.js",
      "Express.js",
      "Angular",
      "TailwindCSS",
      "FastAPI",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "Docker",
      "Azure",
      "Google Cloud Platform",
      "Firebase",
      "MongoDB",
      "Figma",
      "Jira",
      "VS Code",
    ],
  },
];
