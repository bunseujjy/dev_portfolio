export interface Projects {
  projectName: string;
  projectLink: string;
  period: string;
  responsibilities: {
    content: string; // multiline description
  }[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  responsibilities: {
    content: string; // multiline description
  }[];
  skills: string[]
}

export interface Interests {
  interests: string[]
}

export interface Education {
  education: string;
  school: string;
  graduationYears?: string
}

export interface Frontend {
  title: string;
  frameworks: string[];
  coreSkills: string[];
  cssFrameworks: string[];
  apiTechnologies: string[]
}

export interface Backend {
  title: string;
  programmingLanguages: string[];
  frameworks: string[];
  databases: string[];
  apiServices: string[];
  otherTechnologies: string[]
}

export interface Others {
  title: string;
  dataStructures: string[];
  tools: string[];
  operatingSystems: string[];
  otherSkills: string[]
}

// description.ts
export const description: string[] = [
  "I'm a fourth-year Computer Science student at the Royal University of Phnom Penh (RUPP) with a strong passion for frontend development.",
  "I enjoy building clean, responsive user interfaces and bringing ideas to life through modern web technologies.",
  "I'm always eager to learn new tools and frameworks, and I strive to create user-friendly experiences that combine design and functionality.",
];

export const projects: Projects[] = [
  {
    projectName: "Project Collaborator – Children's Voting Platform",
    projectLink: "https://ace-voting.vercel.app",
    period: "Jan 2025 - Present",
    responsibilities: [
      {
        content: `• Assisted in developing a web-based platform that allows users to vote for children’s creative work (e.g., drawings).
• Contributed to front-end design using [technology, e.g., Next Js, Tailwind Css], ensuring a user-friendly interface.
• Helped implement a voting system that tracked and displayed vote counts in real time.`,
      },
    ],
  },
  {
    projectName: "Personal Project – Asian Drama Info Website",
    projectLink: "https://mijudramainfo.netlify.app",
    period: "2023 - 2024",
    responsibilities: [
        {
        content: `• Built a responsive drama listing website using Next.js, Tailwind Css, NodeJs.
• Integrated MongoDB with Prisma ORM to manage and store application data efficiently.
• Integrated TMDB API to fetch show data
• Added features like search, spoilers toggle, and streaming provider filters`,
      },
    ]
  },
  {
    projectName: "Personal Project – Portfolio Website",
    projectLink: "https://bunseueng.netlify.app",
    period: "2023 - 2024",
    responsibilities: [
        {
            content: `• Build a responsive ecommerce website using NextJs, Tailwind Css, Node Js
• Integrated MongoDB with Prisma ORM to manage and store application data efficiently.
• Used Stipe for testing payment method
• Added features like search, sorting, filtering`
        }
    ]
  },
  {
    projectName: "Personal Project - Ecommerce Website",
    projectLink: "https://lusiecommerce.netlify.app",
    period: "2022 - 2023",
    responsibilities: [
      {
        content: `• Build a responsive ecommerce website using NextJs, Tailwind Css, Node Js
• Integrated MongoDB with Prisma ORM to manage and store application data efficiently.
• Used Stipe for testing payment method
• Added features like search, sorting, filtering`
      }
    ]
  },
  {
    projectName: "Personal Project - Gaming Ecommerce Website",
    projectLink: "https://bunseujjy.github.io/SangZhiStore/",
    period: "2021 - 2022",
    responsibilities: [
        {
            content: `• Build a responsive gaming ecommerce website using React.Js, Css`
        }
    ]
  }
];


export const experiences: Experience[] = [
   {
    role: "Project Collaborator – Children's Voting Platform",
    organization: "Freelancer",
    period: "May 2025",
    responsibilities: [
      {
        content: `• Assisted in developing a web-based platform that enables users to vote for children’s creative works, such as drawings.
• Contributed to front-end development using Next.js and Tailwind CSS, ensuring a clean and user-friendly interface.
• Helped implement a real-time voting system to track and display votes dynamically.`,
      }
    ],
    skills: ["• Next.js", "• MongoDB", "• Prisma", "• Tailwind CSS"]
  },
  {
    role: "Developer – Mobile Shop Management System",
    organization: "Royal University of Phnom Penh",
    period: "March 2025",
    responsibilities: [
      {
        content: `• Designed and developed a management system to handle mobile phone inventory, including adding, updating, and deleting products.
• Built features to manage customer data, improving the shop’s operational efficiency.
• Created a fully functional desktop application using C#.`
      }
    ],
    skills: ["• C#", "• Technical Presentation"]
  },
 {
  role: "Developer – Library Management System",
  organization: "Royal University of Phnom Penh",
  period: "Dec 2024",
  responsibilities: [
    {
      content: `• Collaborated with team members to develop a fully functional library management system.
• Implemented book borrowing tracking features to monitor lending activity.
• Built CRUD functionality to manage book records, including editing, deleting, and updating information.`
    }
  ],
  skills: ["• C#", "• Technical Presentation"]
}

];

export const interests: Interests[] = [
  {
    interests: [
          `"Web Development"`,
          `"Watch related coding video"`,
          `"Music"`,
          `"Video Game"`
    ]
  },
]

export const education: Education[] = [
  {
    education: "Fourth year Computer Science",
    school: "Royal University of Phnom Penh",
    graduationYears: "2025"
  },
  {
    education: "React.Js, API",
    school: "ETEC Center",
    graduationYears: "2024"
  },
  {
    education: "Vue.js, Nuxt.js, Docker",
    school: "Self-learning",
    graduationYears: "2024"
  },
  {
    education: "React.js, Next.js, Node.js, Tailwind Css",
    school: "Self-learning",
    graduationYears: "2023"
  },
  {
    education: "HTML, Css, Bootstrap, Javascript",
    school: "Self-learning",
    graduationYears: "2022"
  },
  {
    education: "Highschool Education",
    school: "Toul Ampil Highschool",
    graduationYears: "2019-2021"
  }
]

export const frontend: Frontend[] = [
  {
    title: "Frontend Technologies",
    frameworks: [`"ReactJS", 
"NextJS", 
"VueJS", 
"NuxtJS"`],
    coreSkills: [`"HTML", 
"CSS", 
"Javascript"`],
    cssFrameworks: [`"Tailwind CSS", 
"Bootstrap", 
"Module CSS", 
"Shadcn/ui"`],
    apiTechnologies: [`"RestAPI", 
"JSON"`]
  }
]

export const backend: Backend[] = [
  {
    title: "Backend Technologies",
    programmingLanguages: [`"C#", 
"NodeJS", 
"Java", 
"C#"`],
    frameworks: [`".NET Core", 
"ASP.NET Framework"`],
    databases: [`"SQL / MySQL", 
"PostgreSQL", 
"MongoDB", 
"Supabase"`],
    apiServices: [`"RestAPI", 
"Web API"`],
    otherTechnologies: [`"Fluent Validation"`,
`"Authentication & Authorization"`,
`"Logging"`,
`"Global Exception Handling"`
    ]
  }
]

export const otherSkills: Others[] = [
  {
    title: "Other Technical Skills",
    dataStructures: [`"Data Structures & Algorithms"`],
    tools: [`"Docker",
"Postman",
"VSCode`
    ],
    operatingSystems: [`"Ubuntu",
"Windows"`
],
    otherSkills: [`"SEO Optimization",
"Google Ads Integration",
"Performance Optimization"`
]
  }
]