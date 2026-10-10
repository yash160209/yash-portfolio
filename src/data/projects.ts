export type ProjectStatus = "Demo Ready" | "In Progress";

export type Project = {
  slug: string;
  name: string;
  category: string;
  role?: string;
  status: ProjectStatus;
  description: string;
  overview: string;
  technologies: string[];
  completed: string[];
  planned: string[];
  challenge: string;
  nextSteps: string;
  liveUrl: string | null;
  sourceUrl: string | null;
  visual: "cake" | "sun" | "techfair";
};

export const projects: Project[] = [
  {
    slug: "cakebloom",
    name: "CakeBloom",
    category: "Bakery website demo",
    status: "Demo Ready",
    description:
      "A bakery website demo designed to showcase cakes and provide a polished online browsing experience.",
    overview:
      "CakeBloom is a bakery website demo designed to showcase cakes and provide a polished online browsing experience.",
    technologies: ["Website design", "Responsive layout"],
    completed: [
      "Cake-focused visual presentation",
      "Responsive website layout",
      "A polished online browsing experience",
    ],
    planned: [],
    challenge:
      "Balancing a rich, appetite-led visual direction with an interface that remains clear and comfortable to browse on smaller screens.",
    nextSteps:
      "Add the live demo and source-code destinations once they can be verified.",
    liveUrl: "https://cakebloom-demo.vercel.app/",
    sourceUrl: "https://github.com/yash160209/cakebloom-demo",
    visual: "cake",
  },
  {
    slug: "sun-electronics",
    name: "Sun Electronics",
    category: "Electronics shop website",
    status: "In Progress",
    description:
      "An electronics shop website project focused on presenting products and making customer enquiries easier.",
    overview:
      "Sun Electronics is an electronics shop website project focused on presenting products and making customer enquiries easier.",
    technologies: [],
    completed: [],
    planned: [],
    challenge:
      "Designing a clear way to present products while keeping the enquiry experience straightforward.",
    nextSteps:
      "Continue development and verify features as they are implemented.",
    liveUrl: null,
    sourceUrl: null,
    visual: "sun",
  },
  {
    slug: "techfair-2027",
    name: "TechFair 2027",
    category: "Independent festival website",
    role: "Solo Developer",
    status: "In Progress",
    description:
      "A college technical-festival website with interactive electronics-themed experiences.",
    overview:
      "TechFair 2027 is a college technical-festival website with interactive electronics-themed experiences, developed independently as a solo project.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Three Fiber",
      "Three.js",
    ],
    completed: [],
    planned: [],
    challenge:
      "Balancing an engaging technical-festival experience with a clear, approachable way for visitors to explore it.",
    nextSteps:
      "Continue development and document implemented experiences as they are ready to share.",
    liveUrl: null,
    sourceUrl: null,
    visual: "techfair",
  },
];

export const contact = {
  email: "yashmakwana1609@gmail.com",
  githubUrl: "https://github.com/yash160209",
  instagramUrl: "https://instagram.com/the.unfiltered_yash",
};
