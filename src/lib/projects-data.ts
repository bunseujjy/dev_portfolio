interface Projects {
  image: string
  project: string
  title: string
  description: string
  live_site?: string
  github_url?: string
  slug: string
}

interface Projects_Data {
  header: string
  domain?: string
  repo?: string
  title: string
  description: string
  usage: string[]
  galary: {
    image: string
  }[]
}

const nextjs_url = "/nextjs_project"
const reactjs_url = "/reactjs_project"
const nuxtjs_url = "/nuxtjs_project"
const vuejs_url = "/vuejs_project"

export const reactjs_project: Projects[] = [
  {
    image: `${reactjs_url}/sangzhistore/homepage.jpg`,
    project: "Project 6",
    title: "// Sangzhi Store - Game Shop",
    description:
      "SangZhiStore is a visually dynamic React-based eCommerce site for gaming merchandise. It uses animations from Animate.css and carousel libraries like Swiper and React Slick to deliver an interactive product browsing experience. Users can navigate through categories, view product details, and enjoy smooth transitions between pages. Built with Formik and React Hook Form for user interactions and validation, the site blends functionality with style, offering a bold and vibrant design suited for the gaming community. Perfect for showcasing UI design skills and front-end responsiveness.",
    live_site: "https://bunseujjy.github.io/SangZhiStore",
    github_url: "https://github.com/bunseujjy/SangZhiStore",
    slug: "SangzhiStore",
  },
]

export const nextjs_project: Projects[] = [
  {
    image: `${nextjs_url}/mijudramainfo/homepage.jpg`,
    project: "Project 1",
    title: "// MijuDramaInfo (Movie App)",
    description:
      "MijuDramaInfo is a full-featured web application built for fans of Asian dramas, movies, and variety shows. It integrates with the TMDB API to provide detailed information on TV shows, films, and actors across South Korea, Japan, China, and more. Users can search for content, create and manage watchlists, rate and review shows, and even participate in community discussions. The platform features secure authentication with NextAuth, dynamic user interactions powered by Prisma and MongoDB, rich text editing with Tiptap, and seamless payment integrations with PayPal and Stripe. Designed with performance and interactivity in mind using Next.js, Framer Motion, and Tailwind CSS.",
    
    live_site: "https://mijudramainfo.netlify.app",
    slug: "MijuDramaInfo",
  },
  {
    image: `${nextjs_url}/lusiecommerce/homepage.jpg`,
    project: "Project 2",
    title: "// LusiEcommerce - Shoes Store",
    description:
      "LusiEcommerce is a modern eCommerce platform tailored for online shoe shopping. It features product browsing, filtering, search, cart functionality, and a smooth checkout experience powered by Stripe. The site is built with Next.js, MongoDB, and Prisma for full-stack capability, along with authentication via NextAuth. Admins can manage products and view orders, while customers enjoy a responsive, user-friendly interface with fast performance and clean UI components using Shadcn and Tailwind CSS. The design emphasizes simplicity, efficiency, and modern aesthetics to elevate the online shopping experience.",
    
    live_site: "https://lusiecommerce.netlify.app",
    github_url: "https://github.com/bunseujjy/lusi_eCommerce",
    slug: "LusiEcommerce",
  },
  {
    image: `${nextjs_url}/acevoting/homepage.jpg`,
    project: "Project 3",
    title: "// Project Collaborator – Children's Voting Platform",
    description:
      "AceVoting is a creative platform designed to make voting engaging and educational for children. Built using Next.js and MongoDB, this app enables kids to participate in fun, themed polls with a simple and colorful interface. The voting system is secure and user-friendly, supporting admin-side management of questions and submissions. It’s an ideal platform for encouraging interaction, decision-making, and community involvement in a classroom or family setting. The site is fully responsive and features a playful, accessible design.",
    
    github_url: "https://github.com/bunseujjy/ace_voting",
    live_site: "https://acevoting.vercel.app",
    slug: "AceVoting",
  },
  {
    image: `${nextjs_url}/camjobfindr/homepage.jpg`,
    project: "Project 4",
    title: "// CamJobFindr (Job Portal)",
    description:
      "CamJobFindr is a job search and hiring platform built for the Cambodian job market. Developed with Next.js, Drizzle ORM, and Tailwind CSS, it enables job seekers to browse listings, apply directly, and print professional job applications. Employers can post openings and manage applicants through a clean, intuitive dashboard. The platform uses Framer Motion for smooth UI transitions and includes tools like Tiptap for rich job descriptions and React Hook Form with Zod for precise form validation. Designed with scalability and mobile responsiveness in mind, it serves as a practical solution for local recruitment needs.",
    
    github_url: "https://github.com/bunseujjy/camjobfindr",
    slug: "CamJobFindr",
  },
  {
    image: `${nextjs_url}/portfolio/homepage.jpg`,
    project: "Project 5",
    title: "// Portfolio",
     description:
      "This personal portfolio site showcases your full-stack development projects, skills, and experience in a sleek, animated layout. Built with Next.js, Tailwind CSS, and Framer Motion, it offers an interactive overview of your work, with sections for featured projects, technologies, contact form, and GitHub integrations. Each project links to live demos and repositories, making it easy for recruiters and collaborators to view your code. The portfolio is fully responsive, SEO-optimized, and demonstrates proficiency in modern development tools including TypeScript, React-Three, and Knip",
    
    live_site: "https://bunseueng.netlify.app",
    github_url: "https://github.com/bunseujjy/myportfolio",
    slug: "Portfolio",
  },
]

export const nuxtjs_project: Projects[] = [
  {
    image: `${nuxtjs_url}/mijublog/homepage.jpg`,
    project: "Project 7",
    title: "// MijuBlog - Blog Post",
    description:
      "MijuBlog is a feature-rich blogging platform built using Nuxt.js and Supabase. It allows authenticated users to write and publish blog posts using a Quill-based rich text editor. The blog supports full SEO optimization with Nuxt SEO and includes email notifications via Nuxt Email and Nodemailer. Posts can be scheduled using Croner, and all content is stored securely in Supabase. Smooth scrolling, image galleries, and dynamic routing enhance the reading experience. This platform is ideal for developers or content creators who want to maintain a modern, self-hosted blog with performance and scalability.",
    live_site: "https://mijublog.netlify.app/",
    github_url: "https://github.com/bunseujjy/mijublog",
    slug: "MijuBlog",
  },
]

export const vuejs_project: Projects[] = [
  {
    image: `${vuejs_url}/mijuchat/homepage.jpg`,
    project: "Project 8",
    title: "// MijuChat - Real-time Chat App",
    description:
      "MijuChat is a sleek real-time chat application built with Vue.js and Tailwind CSS. It supports live messaging with emoji integration, smooth scroll behavior, and visual notifications using Vue Toastification. Users can chat across channels or private rooms in a responsive interface powered by Vue Router and Vuetify. The chat UI uses Vue3 Perfect Scrollbar for fluid scrolling and includes emoji pickers for expressive communication. Ideal for real-time collaboration, this app highlights your ability to build scalable, user-focused features with modern Vue tooling.",
    github_url: "https://github.com/bunseujjy/mijuchat",
    slug: "MijuChat",
  },
]

export const nextjs_project_info: Record<string, Projects_Data> = {
  mijudramainfo: {
    header: `${nextjs_url}/mijudramainfo/homepage.jpg`,
    domain: "https://mijudramainfo.netlify.app",
    title: "MijuDramaInfo (Movie App)",
    description:
      "MijuDramaInfo is a full-featured web application built for fans of Asian dramas, movies, and variety shows. It integrates with the TMDB API to provide detailed information on TV shows, films, and actors across South Korea, Japan, China, and more. Users can search for content, create and manage watchlists, rate and review shows, and even participate in community discussions. The platform features secure authentication with NextAuth, dynamic user interactions powered by Prisma and MongoDB, rich text editing with Tiptap, and seamless payment integrations with PayPal and Stripe. Designed with performance and interactivity in mind using Next.js, Framer Motion, and Tailwind CSS.",
    usage: [
      "• NextJs",
      "• Tailwind Css",
      "• Shadcn",
      "• NextAuth",
      "• Typescript",
      "• MongoDB",
      "• NodeJs",
      "• Prisma",
      "• TMDB_API",
      "• React Email",
      "• Tiptap",
      "• bcrypt",
      "• Dayjs",
      "• Framer Motion",
      "• Cloudinary",
      "• Zod",
      "• Paypal",
      "• Stripe",
    ],
    galary: [
      {
        image: `${nextjs_url}/mijudramainfo/homepage.jpg`,
      },
      {
        image: `${nextjs_url}/mijudramainfo/tv_page.jpg`,
      },
      {
        image: `${nextjs_url}/mijudramainfo/actor_page.jpg`,
      },
      {
        image: `${nextjs_url}/mijudramainfo/actor_profile_page.jpg`,
      },
      {
        image: `${nextjs_url}/mijudramainfo/watch_page.jpg`,
      },
      {
        image: `${nextjs_url}/mijudramainfo/Sign_in.mp4`,
      },
    ],
  },
  lusiecommerce: {
    header: `${nextjs_url}/lusiecommerce/homepage.jpg`,
    domain: "https://lusiecommerce.netlify.app",
    repo: "https://github.com/bunseujjy/lusi_eCommerce",
    title: "LusiEcommerce - Shoes Store",
    description:
      "LusiEcommerce is a modern eCommerce platform tailored for online shoe shopping. It features product browsing, filtering, search, cart functionality, and a smooth checkout experience powered by Stripe. The site is built with Next.js, MongoDB, and Prisma for full-stack capability, along with authentication via NextAuth. Admins can manage products and view orders, while customers enjoy a responsive, user-friendly interface with fast performance and clean UI components using Shadcn and Tailwind CSS. The design emphasizes simplicity, efficiency, and modern aesthetics to elevate the online shopping experience.",
    usage: [
      "• NextJs",
      "• Tailwind Css",
      "• Shadcn",
      "• NextAuth",
      "• Typescript",
      "• MongoDB",
      "• NodeJs",
      "• Prisma",
      "• TMDB_API",
      "• React Email",
      "• bcrypt",
      "• Dayjs",
      "• Framer Motion",
      "• Cloudinary",
      "• Zod",
      "• Stripe",
    ],
    galary: [
      {
        image: `${nextjs_url}/lusiecommerce/homepage.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image2.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image3.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image4.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image-5.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image6.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image7.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image8.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image9.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image10.jpg`,
      },
      {
        image: `${nextjs_url}/lusiecommerce/image11.jpg`,
      },
    ],
  },
  acevoting: {
    header: `${nextjs_url}/acevoting/homepage.jpg`,
    domain: "https://ace-voting.netlify.app",
    repo: "https://github.com/bunseujjy/ace_voting",
    title: "Project Collaborator – Children's Voting Platform",
    description:
      "AceVoting is a creative platform designed to make voting engaging and educational for children. Built using Next.js and MongoDB, this app enables kids to participate in fun, themed polls with a simple and colorful interface. The voting system is secure and user-friendly, supporting admin-side management of questions and submissions. It’s an ideal platform for encouraging interaction, decision-making, and community involvement in a classroom or family setting. The site is fully responsive and features a playful, accessible design.",
    usage: [
      "• NextJs",
      "• Tailwind Css",
      "• Shadcn",
      "• Typescript",
      "• MongoDB",
      "• NodeJs",
      "• Prisma",
    ],
    galary: [
      {
        image: `${nextjs_url}/acevoting/homepage.jpg`,
      },
      {
        image: `${nextjs_url}/acevoting/photo1.jpg`,
      },
      {
        image: `${nextjs_url}/acevoting/photo2.jpg`,
      },
      {
        image: `${nextjs_url}/acevoting/photo3.jpg`,
      },
      {
        image: `${nextjs_url}/acevoting/photo4.jpg`,
      },
    ],
  },
  camjobfindr: {
    header: `${nextjs_url}/camjobfindr/homepage.jpg`,
    repo: "https://github.com/bunseujjy/camjobfindr",
    title: "CamJobFindr - Job Portal App",
    description:
      "CamJobFindr is a job search and hiring platform built for the Cambodian job market. Developed with Next.js, Drizzle ORM, and Tailwind CSS, it enables job seekers to browse listings, apply directly, and print professional job applications. Employers can post openings and manage applicants through a clean, intuitive dashboard. The platform uses Framer Motion for smooth UI transitions and includes tools like Tiptap for rich job descriptions and React Hook Form with Zod for precise form validation. Designed with scalability and mobile responsiveness in mind, it serves as a practical solution for local recruitment needs.",
    usage: [
      "• NextJs",
      "• Tailwind Css",
      "• Shadcn",
      "• Typescript",
      "• Docker",
      "• Drizzle",
      "• React Hook Form",
      "• Tiptap",
      "• Vercel Blob",
      "• dotenv",
      "• Framer Motion",
      "• Lucide React",
      "• React To Print",
      "• Zod"
    ],
    galary: [
      {
        image: `${nextjs_url}/camjobfindr/homepage.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo2.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo3.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo4.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo5.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo6.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo7.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo8.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo9.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo10.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo11.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo12.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo13.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo14.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo15.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo16.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo17.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo18.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo19.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo20.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo21.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo22.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo23.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo24.jpg`,
      },
      {
        image: `${nextjs_url}/camjobfindr/photo25.jpg`,
      },
    ],
  },
  portfolio: {
    header: `${nextjs_url}/portfolio/homepage.jpg`,
    repo: "https://github.com/bunseujjy/myportfolio",
    domain: "https://bunseueng.netlify.app",
    title: "CamJobFindr - Job Portal App",
    description:
      "This personal portfolio site showcases your full-stack development projects, skills, and experience in a sleek, animated layout. Built with Next.js, Tailwind CSS, and Framer Motion, it offers an interactive overview of your work, with sections for featured projects, technologies, contact form, and GitHub integrations. Each project links to live demos and repositories, making it easy for recruiters and collaborators to view your code. The portfolio is fully responsive, SEO-optimized, and demonstrates proficiency in modern development tools including TypeScript, React-Three, and Knip",
    usage: [
      "• NextJs",
      "• Tailwind Css",
      "• Typescript",
      "• React-Three Fiber",
      "• React-Three Drei",
      "• Framer Motion",
      "• Knip",
      "• Three",
    ],
    galary: [
      {
        image: `${nextjs_url}/portfolio/homepage.jpg`,
      },
      {
        image: `${nextjs_url}/portfolio/photo2.jpg`,
      },
      {
        image: `${nextjs_url}/portfolio/photo3.jpg`,
      },
      {
        image: `${nextjs_url}/portfolio/photo4.jpg`,
      },
      {
        image: `${nextjs_url}/portfolio/photo5.jpg`,
      },
      {
        image: `${nextjs_url}/portfolio/photo6.jpg`,
      },
      {
        image: `${nextjs_url}/portfolio/photo7.jpg`,
      },
      {
        image: `${nextjs_url}/portfolio/photo8.jpg`,
      },
    ],
  },
  sangzhistore: {
    header: `${reactjs_url}/sangzhistore/homepage.jpg`,
    repo: "https://github.com/bunseujjy/SangZhiStore",
    domain: "https://bunseujjy.github.io/SangZhiStore",
    title: "SangzhiStore - Gaming Shop",
    description:
      "SangZhiStore is a visually dynamic React-based eCommerce site for gaming merchandise. It uses animations from Animate.css and carousel libraries like Swiper and React Slick to deliver an interactive product browsing experience. Users can navigate through categories, view product details, and enjoy smooth transitions between pages. Built with Formik and React Hook Form for user interactions and validation, the site blends functionality with style, offering a bold and vibrant design suited for the gaming community. Perfect for showcasing UI design skills and front-end responsiveness.",
    usage: [
      "• Reactjs",
      "• Animate Css",
      "• Formik",
      "• Jquery",
      "• Reat Hook Form",
      "• React Multi Carousel",
      "• React Slick",
      "• Swiper",
    ],
    galary: [
      {
        image: `${reactjs_url}/sangzhistore/homepage.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo2.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo3.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo4.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo5.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo6.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo7.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo8.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo9.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo10.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo11.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo12.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo13.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo14.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo15.jpg`,
      },
      {
        image: `${reactjs_url}/sangzhistore/photo16.jpg`,
      },
    ],
  },
  mijublog: {
    header: `${nuxtjs_url}/mijublog/homepage.jpg`,
    repo: "https://github.com/bunseujjy/mijublog",
    domain: "https://mijublog.netlify.app/",
    title: "mijublog - Gaming Shop",
    description:
      "MijuBlog is a feature-rich blogging platform built using Nuxt.js and Supabase. It allows authenticated users to write and publish blog posts using a Quill-based rich text editor. The blog supports full SEO optimization with Nuxt SEO and includes email notifications via Nuxt Email and Nodemailer. Posts can be scheduled using Croner, and all content is stored securely in Supabase. Smooth scrolling, image galleries, and dynamic routing enhance the reading experience. This platform is ideal for developers or content creators who want to maintain a modern, self-hosted blog with performance and scalability.",
    usage: [
      "• NuxtJs",
      "• Tailwind Css",
      "• Typescript",
      "• Supabase",
      "• Croner",
      "• Date Fns",
      "• Nodemailer",
      "• Nuxt Icon",
      "• Nuxt Email",
      "• Nuxt Seo",
      "• Quill",
      "• Vue Router",
      "• Vue3 Perfect Scrollbar",
    ],
    galary: [
      {
        image: `${nuxtjs_url}/mijublog/homepage.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo2.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo3.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo4.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo5.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo6.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo7.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo8.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo9.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo10.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo11.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo12.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo13.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo14.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo15.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo16.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo17.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo18.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo19.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo20.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo21.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo22.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo23.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo24.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo25.jpg`,
      },
      {
        image: `${nuxtjs_url}/mijublog/photo26.jpg`,
      },
    ],
  },
  mijuchat: {
    header: `${vuejs_url}/mijuchat/homepage.jpg`,
    repo: "https://github.com/bunseujjy/mijuchat",
    title: "MijuChat - Real-time Chat App",
    description:
      "MijuChat is a sleek real-time chat application built with Vue.js and Tailwind CSS. It supports live messaging with emoji integration, smooth scroll behavior, and visual notifications using Vue Toastification. Users can chat across channels or private rooms in a responsive interface powered by Vue Router and Vuetify. The chat UI uses Vue3 Perfect Scrollbar for fluid scrolling and includes emoji pickers for expressive communication. Ideal for real-time collaboration, this app highlights your ability to build scalable, user-focused features with modern Vue tooling.",
    usage: [
      "• Vuejs",
      "• Tailwind Css",
      "• Clsx",
      "• Dayjs",
      "• Emoji Mart Vue Fast",
      "• Emoji Picker Element",
      "• Vue Router",
      "• Vue Toastification",
      "• Vue3 Perfect Scrollbar",
      "• Vuetify",
    ],
    galary: [
      {
        image: `${vuejs_url}/mijuchat/homepage.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo2.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo3.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo4.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo5.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo6.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo7.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo8.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo9.jpg`,
      },
      {
        image: `${vuejs_url}/mijuchat/photo10.jpg`,
      },
    ],
  },
}
