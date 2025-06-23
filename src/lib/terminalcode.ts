export const about_me_code = `
$ cd personal-info
$ ls -la
total 48
drwxr-xr-x  10 user  staff   320 May 23 14:22 .
drwxr-xr-x  5 user  staff   160 May 23 14:20 ..
-rw-r--r--  1 user  staff   542 May 23 14:21 bio.json
-rw-r--r--  1 user  staff   456 May 23 14:21 education.json
-rw-r--r--  1 user  staff  1248 May 23 14:21 experience.json
-rw-r--r--  1 user  staff   892 May 23 14:21 frontend.json
-rw-r--r--  1 user  staff   734 May 23 14:21 backend.json
-rw-r--r--  1 user  staff   612 May 23 14:21 others.json
-rw-r--r--  1 user  staff   340 May 23 14:21 interests.json

$ cat bio.json
{
  "name": "Senior Frontend Developer",
  "title": "Computer Engineer",
  "summary": "I am a Computer Engineer focused on the software industry and dedicated to improving myself every day.",
  "description": "I’m a hardworking, dedicated developer who cares deeply about the projects I build and embraces this approach in everything I do.",
  "skills": ["NextJS", "ReactJS", "C#", ".NET Core", "PostgreSQL", "Tailwind", "TypeScript"],
  "location": "Istanbul, Turkey",
  "education": "Istanbul Medipol University – Computer Engineering, 2022",
  "current_company": "Privia Security"
}

$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   frontend.json
	modified:   backend.json
	modified:   others.json
	modified:   education.json

no changes added to commit (use "git add" and/or "git commit -a")

$ npm run build

> portfolio@1.0.0 build
> next build

- info Loaded env from .env.local
- info Creating an optimized production build...
- info Compiled successfully
- info Collecting page data...
- info Generating static pages (12/12)
- info Finalizing page optimization...

Route (pages)                              Size     First Load JS
┌ ○ /                                      6.84 kB        94.2 kB
├ ○ /404                                   3.19 kB        85.3 kB
├ ○ /about-me                              9.76 kB        97.1 kB
├ ○ /my-experiences                        12.54 kB       99.8 kB
├ ○ /my-projects                           11.18 kB       98.5 kB
├ ○ /my-skills                             8.94 kB        96.2 kB
├ ○ /frontend-skills                       7.32 kB        94.6 kB
├ ○ /backend-skills                        8.48 kB        95.8 kB
├ ○ /contact                               6.32 kB        93.6 kB
└ ○ /cv-download                           4.18 kB        91.5 kB

+ First Load JS shared by all              87.3 kB
  ├ chunks/framework-8c5acb0054650382.js   45.4 kB
  ├ chunks/main-7ca0c04df29d775c.js        39.2 kB
  └ chunks/pages/_app-69da446bea935969.js  2.7 kB
✓ Done in 15.2s

$ node analyze-profile.js

Analyzing CV data...
Detected main skill categories:
- Frontend: NextJS, ReactJS, Redux, Zustand, HTML, CSS, JavaScript
- Backend: C#, .NET Core, NodeJS, Python, PostgreSQL, MongoDB
- CSS Frameworks: Tailwind, SASS, LESS, Ant Design, Shadcn/ui
- Mobile: React Native
- Tools: Docker, Figma, VSCode, Postman

Experience Summary:
- Total experience: 3+ years
- 1+ year as Senior Frontend Developer (Privia Security)
- 1.4 years as FullStack Developer (Ersa Software)
- 1+ year as Junior Frontend Developer (Alkanlar Elektrik)
- NextJS & ReactJS: 3+ years
- .NET Core: 2+ years
- PostgreSQL & MSSQL: 2+ years

Highlighted Projects:
- PriviaHub: Cybersecurity Learning Platform
- SmartPortal: Finance Application
- Doccon: Document Sharing and Verification System
- B2B/B2C E-commerce Platforms

Analysis complete!
`;

export const projects_code = `$ cd personal-info
$ ls -la
total 24
-rw-r--r--  1 user  staff   423 Jun 22 13:12 bio.json
-rw-r--r--  1 user  staff   508 Jun 22 13:12 experience.json
-rw-r--r--  1 user  staff   651 Jun 22 13:12 projects.json
-rw-r--r--  1 user  staff   192 Jun 22 13:12 interests.json
-rw-r--r--  1 user  staff   298 Jun 22 13:12 education.json

$ cd ../skills
$ ls -la
total 56
drwxr-xr-x  9 user  staff  288 Jun 22 13:15 .
-rw-r--r--  1 user  staff  390 Jun 22 13:15 frontend.json
-rw-r--r--  1 user  staff  358 Jun 22 13:15 backend.json
-rw-r--r--  1 user  staff  276 Jun 22 13:15 css-frameworks.json
-rw-r--r--  1 user  staff  241 Jun 22 13:15 database.json
-rw-r--r--  1 user  staff  223 Jun 22 13:15 tools.json
-rw-r--r--  1 user  staff  144 Jun 22 13:15 os.json
-rw-r--r--  1 user  staff  190 Jun 22 13:15 others.json

$ cat frontend.json
[
  "React", "Next.js", "Vue.js", "Nuxt.js"
]

$ cat css-frameworks.json
[
  "Tailwind CSS", "Sass", "Ant Design", "Shadcn/UI"
]

$ analyze skills
Expertise Overview:
- Frontend: React, Next.js, Vue.js, Nuxt.js
- Backend: Supabase, Prisma, Node.js, Express
- CSS/UI: Tailwind CSS, Sass, Ant Design
- Database: PostgreSQL, MongoDB, Supabase DB
- Tools: Git, Figma, Vercel, Postman
- Operating Systems: macOS, Windows, Linux
- Others: TypeScript, GraphQL, Stripe, Socket.IO

$ list projects
Found 4 major projects:
1. 🎬 MijuDramaInfo – Drama & actor information site with streaming links
2. 💼 Job Portal – Role-based job board for employers and job seekers
3. 👟 SangzhiStore – Game and sneaker eCommerce platform
4. 🌐 Portfolio – Responsive developer portfolio with blog and email form

75% of the projects are built using Next.js. Most use Tailwind CSS and TypeScript for faster development and strong typing.
`

export const techology_code = `$ cd tech-stack
$ ls -la
total 64
drwxr-xr-x  12 user  staff   384 May 23 14:22 .
drwxr-xr-x  5 user  staff   160 May 23 14:20 ..
-rw-r--r--  1 user  staff   892 May 23 14:21 frontend.json
-rw-r--r--  1 user  staff   734 May 23 14:21 backend.json
-rw-r--r--  1 user  staff   612 May 23 14:21 css-frameworks.json
-rw-r--r--  1 user  staff   540 May 23 14:21 database.json
-rw-r--r--  1 user  staff   340 May 23 14:21 tools.json
-rw-r--r--  1 user  staff   180 May 23 14:21 os.json

$ cat frontend.json
{
  "NextJS": 80,
  "ReactJS": 60,
  "HTML": 90,
  "CSS": 85,
  "JavaScript": 70,
  "Typescript": 75,
  "Redux": 50,
  "Zustand": 50,
  "MUI": 50,
  "Bootstrap": 70,
  "Module CSS": 70
}

$ cat backend.json
{
  ".NET": 60,
  "C#": 50,
  "Strapi": 50,
  "NodeJS": 75
}

$ cat css-frameworks.json
{
  "Tailwind": 85,
  "Shadcn": 95
}

$ cat database.json
{
  "SQL / MYSQL": 40,
  "PostgreSQL": 65,
  "SupeBase": 65,
  "MongoDB": 60,
  "Prisma": 80,
  "Drizzle": 50
}

$ cat tools.json
{
  "Docker": 50,
  "Figma": 40,
  "VSCode": 100,
  "Postman": 40
}

$ cat os.json
{
  "Ubuntu": 50,
  "Windows": 50
}

$ npm run analyze-tech

> tech-stack@1.0.0 analyze-tech
> node analyze-tech-stack.js

Analyzing technology stack...

Frontend:
- Strong skills in HTML (90%), CSS (85%), and JavaScript (70%)
- Confident with NextJS (80%), ReactJS (60%), and TypeScript (75%)
- Familiar with Redux, Zustand, MUI, Bootstrap, and Module CSS

Backend:
- Solid NodeJS knowledge (75%)
- Experience with .NET (60%), C# (50%), and Strapi (50%)

CSS Frameworks:
- Advanced Tailwind CSS (85%) and excellent Shadcn UI (95%)

Databases:
- Strong with Prisma (80%), PostgreSQL and Supabase (65%)
- Good grasp of MongoDB (60%) and basic experience with MySQL/SQL and Drizzle

Tools:
- VSCode (100%) and general use of Docker, Postman, and Figma

Operating Systems:
- Balanced use between Ubuntu (50%) and Windows (50%)

Analysis complete!
`

export const contact_code = `$ cd contact$ ls -la
total 32
drwxr-xr-x  7 user     staff   224 May 10 15:30 .
drwxr-xr-x  5 user     staff   160 May 10 15:28 ..
-rw-r--r--  1 user     staff   512 May 10 15:29 email.json
-rw-r--r--  1 user     staff   384 May 10 15:29 phone.json
-rw-r--r--  1 user     staff   728 May 10 15:29 social-media.json
drwxr-xr-x  3 user     staff    96 May 10 15:29 logs
-rwxr-xr-x  1 user     staff  1024 May 10 15:29 send-email.ts

$ node send-email.js
Sending email to: {email}
From: bunseueng@gmail.com
Subject: New contact form submission
Message: {message}
Email sent successfully!

$ cat logs/email-sent.log
2023-05-10T15:32:45.123Z - Email sent to: {email}
2023-05-10T14:27:18.456Z - Email sent to: client@company.com
2023-05-10T12:15:33.789Z - Email sent to: hr@techfirm.com
2023-05-09T16:42:51.234Z - Email sent to: friend@personal.com
2023-05-09T09:11:22.345Z - Email sent to: support@service.com

$ curl -X POST https://api.example.com/contact
{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": "cf-XXXXXX",
  "timestamp": "{timestamp}"
}

$ echo 'Message sent successfully!'
`