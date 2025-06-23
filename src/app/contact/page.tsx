import React from "react";
import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "If you want to ask something, you can contact me here",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
