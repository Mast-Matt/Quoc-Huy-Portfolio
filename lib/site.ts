export const siteConfig = {
  name: "Nguyen Huu Quoc Huy",
  shortName: "Quoc Huy",
  initials: "QH",
  role: "Software Engineer",
  tagline: "Software Engineer building thoughtful web and AI products.",
  status: "Final-year @ RMIT · graduating April 2026 · open to grad SWE roles",
  location: "Ho Chi Minh City, Vietnam",
  email: "nguyenhuuquochuy2@gmail.com",
  phone: "+84 907 760 413",
  url: "https://quoc-huy-portfolio.vercel.app/",
  resumeUrl: "/resume.pdf",
  description:
    "Personal portfolio of Nguyen Huu Quoc Huy — software engineer specialising in Next.js, React, TailwindCSS, and AI-integrated web products.",
  links: {
    github: "https://github.com/Mast-Matt",
    linkedin: "https://linkedin.com/in/huy-nguyen-706727310",
    email: "mailto:nguyenhuuquochuy2@gmail.com",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
