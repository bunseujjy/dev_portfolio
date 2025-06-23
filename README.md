# 💼 Developer Portfolio

A clean and interactive personal portfolio built with **Next.js**, **Tailwind CSS**, and modern UI practices — designed to showcase your development skills, projects, experiences, and more.

## 🔗 Live Demo

Check out the live portfolio 👉 [https://bunseuengdev.vercel.app](https://bunseuengdev.vercel.app)

## ✨ Features

- 🌐 Fully responsive layout
- ⚡ Fast performance with Next.js & Static Generation
- 🎨 Styled with Tailwind CSS + custom components
- 🧠 Dynamic data structure with JSON files
- 💼 Sections:
  - About Me
  - Experience
  - Projects
  - Tech Stack
  - Education
  - Interests
  - Contact
- 📥 Downloadable CV
- 🗂 VSCode-like terminal simulation (cool CLI-inspired UI)

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/ui](https://ui.shadcn.com/) (Optional)
- JSON-based content structure

## 📁 Folder Structure

```
📦 dev_portfolio
├── assets
├── public
├── react-email-starter
src/
├── app/
│   ├── about-me/           # About page
│   ├── api/                # API routes (if using server actions or API endpoints)
│   ├── blogposts/          # Blog pages or MDX blog entries
│   ├── component/          # Possibly shared UI pieces used across app routes
│   ├── contact/            # Contact form/page
│   ├── projects/           # Projects/Portfolio page
│   ├── technology/         # Tech stack / skills section
│   ├── favicon.ico
│   ├── apple-icon.png
│   ├── icon0.svg / icon1.png
│   ├── manifest.json       # PWA manifest
│   ├── opengraph-image.jpg # Social sharing image
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # App layout (shared header/footer)
│   └── page.tsx            # Home page
├── components/             # Reusable React components
├── lib/                    # Utilities / helpers / server functions
├── .env                    # Environment variables
├── components.json         # Possibly icon or UI config
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS setup (used by Tailwind)
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
```

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/bunseujjy/dev_portfolio.git
cd dev_portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

## 🧠 Customize

- Edit your information in `/data/personal-info/` and `/data/tech-stack/`
- Replace images/logos inside `/public/`
- Update meta info inside `app/layout.tsx` or `next.config.js` if needed
- Configure CV download in `/app/cv-download`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

Developed by [bunseujjy](https://github.com/bunseujjy)

Want to collaborate or have feedback? Feel free to open an issue or reach out!
