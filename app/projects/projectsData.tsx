export type ProjectSection = {
  id: string;
  title: string;
  content?: string;
  accordion?: { title: string; content: string }[];
};

export type ProjectData = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  date: string;
  sections: ProjectSection[];
};

export const projects: ProjectData[] = [
  {
    slug: "Videojoccomplet",
    title: "Videojoc Complet",
    subtitle: "A full-stack startup pitch platform",
    description:
      "Next Venture is a web platform for entrepreneurs to create, share, and explore startup pitches.",
    tags: ["Next.js 15", "Typescript", "TailwindCSS", "Shadcn UI", "Sanity CMS"],
    date: "2024-03-01",

    sections: [
      {
        id: "key-features",
        title: "Key Features",  
        accordion: [
          {
            title: "High-Performance Architecture",
            content:
              "Built on Next.js 15 using Partial Prerendering, Server Components and Server Actions...",
          },
          {
            title: "Headless CMS Integration",
            content: "Real-time content sync using Sanity CMS...",
          },
          {
            title: "Seamless Authentication",
            content: "Auth.js implementation with custom providers...",
          },
          {
            title: "Polished & Accessible UI",
            content: "A clean UI built with Radix + Tailwind...",
          },
        ],
      },

      {
        id: "tech-stack",
        title: "Tech Stack",
        content: `
        - Next.js 15 – Full-stack React framework  
        - Typescript – Type safety  
        - TailwindCSS – Utility-first styling  
        - Shadcn UI – Radix-based components  
        - Sanity CMS – Real-time syncing  
        - Motion.dev – Animations  
        `,
      },

      {
        id: "outcome",
        title: "Outcome",
        content: "Improved developer experience and project scalability...",
      },
    ],
  },
  {
    slug: "next-venturee",
    title: "Next Venture",
    subtitle: "A full-stack startup pitch platform",
    description:
      "Next Venture is a web platform for entrepreneurs to create, share, and explore startup pitches.",
    tags: ["Next.js 15", "Typescript", "TailwindCSS", "Shadcn UI", "Sanity CMS"],
    date: "2024-03-01",

    sections: [
      {
        id: "key-features",
        title: "Key Features",  
        accordion: [
          {
            title: "High-Performance Architecture",
            content:
              "Built on Next.js 15 using Partial Prerendering, Server Components and Server Actions...",
          },
          {
            title: "Headless CMS Integration",
            content: "Real-time content sync using Sanity CMS...",
          },
          {
            title: "Seamless Authentication",
            content: "Auth.js implementation with custom providers...",
          },
          {
            title: "Polished & Accessible UI",
            content: "A clean UI built with Radix + Tailwind...",
          },
        ],
      },

      {
        id: "tech-stack",
        title: "Tech Stack",
        content: `
        - Next.js 15 – Full-stack React framework  
        - Typescript – Type safety  
        - TailwindCSS – Utility-first styling  
        - Shadcn UI – Radix-based components  
        - Sanity CMS – Real-time syncing  
        - Motion.dev – Animations  
        `,
      },

      {
        id: "outcome",
        title: "Outcome",
        content: "Improved developer experience and project scalability...",
      },
    ],
  },
];
