"use client";

/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useEffect, useState } from "react";
import TerminalSnippet from "./TerminalSnippet";
import Footer from "./Footer";
import { developer_info } from "@/lib/developer";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const config = developer_info[0];

  useEffect(() => {
    if (window.innerWidth <= 1024) setIsMobile(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  return (
    <React.Fragment>
      <div className="flex-1 overflow-auto">
        <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-8 p-8 relative w-full h-full">
          {/* Gradients */}
          <div
            className="fixed bottom-[25%] right-[5%] h-[300px] w-[300px] rotate-[10deg] rounded-b-[50%] bg-radial-gradient opacity-50 blur-[70px] z-10 lg:bottom-[10%] lg:right-[10%] lg:h-[500px] lg:w-[500px] lg:rounded-br-[50%] lg:rounded-tl-[100%] lg:opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 50%,rgba(77, 91, 206, 1), rgba(76, 0, 255, 0))",
            }}
          ></div>

          <div
            className="absolute top-[20%] right-[30%] h-[300px] w-[300px] rounded-br-[50%] bg-radial-gradient opacity-50 blur-[70px] z-10 lg:fixed lg:top-[10%] lg:right-[35%] lg:h-[400px] lg:w-[400px] lg:rotate-[20deg] lg:rounded-tl-[100%] lg:blur-[100px]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%,rgba(67, 217, 173, 1), rgba(76, 0, 255, 0))",
            }}
          ></div>

          <section className="hero flex w-full flex-col">
            <div className="head md:pt-10 pb-0!">
              <span className="font-fira-code text-[18px] leading-none text-[#E5E9F0]">
                Hi all, I am
              </span>
              <h1 className="font-fira-code pt-4 pb-4 text-xl md:text-2xl lg:text-3xl xl:text-6xl font-bold leading-none text-white">
                {config.name}
              </h1>
              <span className="diple flex text-sm! text-purple-500!">
                {">"}
                <h2 className="line-1 anim-typewriter max-w-fit font-fira-code text-xl! leading-none text-purple-500 ml-2">
                  {config.role}
                </h2>
              </span>
            </div>

            <div id="info" className="flex flex-col pt-8!">
              <span className="action font-fira-code pb-4 text-[14px] leading-none text-[#8da9c6] md:hidden">
                // Do you want to visit my github?
              </span>
              <span
                className={`font-fira-code text-[14px] pb-2! leading-none text-[#8da9c6] ${
                  isMobile ? "hidden" : ""
                }`}
              >
                // click the link below 👌
              </span>
              <span
                className={`font-fira-code text-[14px] leading-none text-[#8da9c6] pb-2! ${
                  !isMobile ? "hidden" : ""
                }`}
              >
                // find my profile on Github:
              </span>
              <p className="code font-fira-code">
                <span className="text-purple-500">const</span>
                <span className="text-[#43D9AD]"> githubLink</span>
                <span className="text-white"> = </span>
                <a
                  className="text-amber-500 underline underline-offset-4 pl-2"
                  href={`https://github.com/${config.contacts?.social.github.user}`}
                >
                  &rdquo;https://github.com/
                  {config.contacts?.social.github.user}&rdquo;
                </a>
              </p>
            </div>
          </section>

          {!isMobile && (
            <section
              data-aos="fade-up"
              className="relative hidden lg:flex flex-col gap-4 justify-center order-1 lg:order-2 h-1/2 my-auto z-20"
            >
              <TerminalSnippet />
            </section>
          )}
        </main>
      </div>
      <Footer isOpen={true} setIsOpen={() => setIsOpen(!isOpen)} />
    </React.Fragment>
  );
}
