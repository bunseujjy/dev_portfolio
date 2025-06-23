import React from "react";
import AboutMe from "./AboutMe";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Me",
  description: "Everything that related to me on my journey as a Web Devloper",
};
const AboutMePage = () => {
  return <AboutMe />;
};

export default AboutMePage;
