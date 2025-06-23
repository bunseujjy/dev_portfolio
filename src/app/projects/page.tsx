import React from "react";
import Projects from "./Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "All of the projects that I built is listed here.",
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
