import React from "react";
import Technology from "./Technology";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techology",
  description: "All of the skills/tect-stack that I have learned so far.",
};

const TechnologyPage = () => {
  return <Technology />;
};

export default TechnologyPage;
