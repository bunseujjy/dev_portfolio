import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import Navbar from "./component/Navbar";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  title: {
    default: "BunseuEng | Portfolio",
    template: "%s - Portfolio",
  },
  description:
    "I'm Eng Bunseu, a passionate web developer with 4 years of experience in creating stunning and user-friendly websites. My journey in web development started with a love for solving complex problems through code, and that passion continues to drive me today.I specialize in building responsive, modern web applications using technologies like React, Next.js, Tailwind CSS and Node.js. I enjoy collaborating with teams to create functional and aesthetically pleasing user experiences. When I'm not coding, you can find me exploring the latest web development trends or contributing to open-source projects. I'm always eager to take on new challenges and bring ideas to life through creative coding solutions.",
  applicationName: "BunseuEng",
  keywords: ["portfolio", "dev", "nextjs", "dev portfolio", "bunseueng"],
  authors: [{ name: "Eng Bunseu", url: `${process.env.BASE_URL}` }],
  creator: "Eng Bunseu",
  publisher: "Eng Bunseu",
  openGraph: {
    title: "Bunseu Eng | Dev Portfolio",
    description:
      "I'm Eng Bunseu, a passionate web developer with 4 years of experience in creating stunning and user-friendly websites. My journey in web development started with a love for solving complex problems through code, and that passion continues to drive me today.I specialize in building responsive, modern web applications using technologies like React, Next.js, Tailwind CSS and Node.js. I enjoy collaborating with teams to create functional and aesthetically pleasing user experiences. When I'm not coding, you can find me exploring the latest web development trends or contributing to open-source projects. I'm always eager to take on new challenges and bring ideas to life through creative coding solutions.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "BunseuEng Banner",
      },
    ],
    type: "website",
    locale: "en_US",
    url: `${process.env.BASE_URL}`,
    siteName: "BunseuEng",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunseu Eng | Dev Portfolio",
    description:
      "I'm Eng Bunseu, a passionate web developer with 4 years of experience in creating stunning and user-friendly websites. My journey in web development started with a love for solving complex problems through code, and that passion continues to drive me today.I specialize in building responsive, modern web applications using technologies like React, Next.js, Tailwind CSS and Node.js. I enjoy collaborating with teams to create functional and aesthetically pleasing user experiences. When I'm not coding, you can find me exploring the latest web development trends or contributing to open-source projects. I'm always eager to take on new challenges and bring ideas to life through creative coding solutions.",
    images: ["/opengraph-image.jpg"],
    site: "@bunseueng",
    creator: "@EngBunseu",
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "any" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased `}>
        <div id="root">
          <div className="flex flex-col h-full">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
