import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  flutter,
  meta,
  starbucks,
  engageuofficial_logo,
  tesla,
  shopify,
  carrent,
  portfolioProjects,
  ayushojha,
  rohanimage,
  kritarthimage,
  jobit,
  tripguide,
  threejs,
  gdsc,
  gfg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cross Platform Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Structures & Algorithms",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
   {
    name: "flutter",
    icon: flutter,
  },

];

const experiences = [
  {
    title: "Flutter and FlutterFlow Developer",
    company_name: "EngageU",
    icon: engageuofficial_logo,
    iconBg: "#383E56",
    date: "September 2025 - Present",
    points: [
      "Developing and maintaining mobile application using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain Domain Head",
    company_name: "GDSC GCET",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "January 2024 - January 2025",
    points: [
      "Led the Blockchain domain at GDSC GCET, mentoring students and fostering interest in Web3 technologies.",
    "Organized and conducted workshops on blockchain fundamentals, smart contracts, and decentralized applications (dApps).",
    "Collaborated with cross-domain leads to integrate blockchain concepts into real-world projects and hackathons.",
    "Guided teams in using tools like Solidity, Ethereum, and other blockchain frameworks for hands-on learning.",
    "Promoted awareness of decentralized technologies and their applications through community events and sessions.",
    ],
  },
  {
    title: "Student Coordinator",
    company_name: "GeeksforGeeks GCET",
    icon: gfg,
    iconBg: "#383E56",
    date: "December 2022 - December 2023",
    points: [
      "Coordinated and managed student engagement activities under the GeeksforGeeks GCET chapter.",
    "Organized coding contests, hackathons, and technical sessions to improve peer learning and problem-solving skills.",
    "Facilitated workshops on Data Structures, Algorithms, and Competitive Programming for students.",
    "Collaborated with the core team to bring industry-level insights and resources to the campus community.",
    "Motivated and guided students to participate in coding challenges and contribute to open-source projects.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Subhava is an exceptional developer who delivers high-quality work on time.",
    name: "Ayush Ojha",
    designation: "CFO",
    company: "WYRD",
    image: ayushojha,
  },
  {
    testimonial:
      "I've never met an app developer who truly cares about their clients' success like Subhava does.",
    name: "Rohan Anand",
    designation: "Student Council Head",
    company: "GCET",
    image: rohanimage,
  },
  {
    testimonial:
      "Subhava is a true professional. His dedication to his work is unparalleled.",
    name: "Kritarth",
    designation: "Student Placement member",
    company: "Parul University",
    image: kritarthimage,
  },
];

const projects = [
  {
    name: "SafarSaathi App",
    description:
    "A Flutter-based app for tourist safety in North & NE India. It offers OTP login, blockchain-verified Aadhar/Passport ID, Firebase backend, Email.js notifications, Python scripts for alerts, GMap API integration, PostgreSQL DB, real-time flood/earthquake/landslide updates, safety scores, SOS, and emergency contacts. Multi-language support.",
    tags: [
      {
        name: "app",
        color: "blue-text-gradient",
      },
      {
        name: "AI/ML",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioProjects,
    source_code_link: "https://github.com/subhava06/SIH_project_SafarSaathi_App",
  },
  {
    name: "HiveMind: Collect, Create, Connect",
    description:
    "A modern Flutter blog app built with Clean Architecture, powered by Supabase for backend, BLoC for state management, Hive for offline storage, GetIt for dependency injection, and FpDart for functional programming—delivering fast, scalable, and maintainable content publishing.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "BLoC",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioProjects,
    source_code_link: "https://github.com/subhava06/HiveMind-Collect-Create-Connect",
  },
  {
    name: "TummyTap",
    description:
    "A dynamic Flutter app powered by the Provider state management system, designed to satisfy your cravings and offer personalized meal suggestions. Features like customizable meal plans, dietary filters, and a sleek UI make meal planning effortless and enjoyable.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "provider",
        color: "green-text-gradient",
      },
      {
        name: "implicit/explicit animations",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioProjects,
    source_code_link: "https://github.com/subhava06/Tummy_Tap",
  },
];

export { services, technologies, experiences, testimonials, projects };