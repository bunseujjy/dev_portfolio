"use client";

import React, { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { icons } from "@/lib/icon";
import { description } from "@/lib/about-me-data";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Footer from "../component/Footer";
import AboutMeTerminal from "./AboutMeTerminal";
import { ImperativePanelHandle } from "react-resizable-panels";
import Projects from "./Projects";
import Experience from "./Experience";
import Interests from "./Interests";
import Education from "./Education";
import Frontend from "./Frontend";
import Backend from "./Backend";
import OtherSkills from "./OtherSkills";
import { ScrollArea } from "@/components/ui/scroll-area";
import { about_me_code } from "@/lib/terminalcode";
import { IoMdArrowDown } from "react-icons/io";
import AboutmeSidebar from "../component/AboutmeSidebar";

const AboutMe = () => {
  const [allTabs, setAllTabs] = useState(["bio.json"]);
  const [tabs, setTabs] = useState("bio.json");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // Refs for controlling panel sizes
  const mainPanelRef = useRef<ImperativePanelHandle>(null);
  const terminalPanelRef = useRef<ImperativePanelHandle>(null);
  // Panel size constants
  const DEFAULT_TERMINAL_SIZE = 25;
  const DEFAULT_MAIN_SIZE = 75;
  const MAX_TERMINAL_SIZE = 50;
  const MIN_TERMINAL_SIZE = 15;

  // Function to toggle between expanded and default size
  const expandTerminal = () => {
    if (terminalPanelRef.current && mainPanelRef.current) {
      if (isExpanded) {
        // Collapse to default size
        terminalPanelRef.current.resize(DEFAULT_TERMINAL_SIZE);
        mainPanelRef.current.resize(DEFAULT_MAIN_SIZE);
        setIsExpanded(false);
      } else {
        // Expand to max size
        terminalPanelRef.current.resize(MAX_TERMINAL_SIZE);
        mainPanelRef.current.resize(100 - MAX_TERMINAL_SIZE);
        setIsExpanded(true);
      }
    }
  };

  const removeTab = (id: string) => {
    setAllTabs((data) => data.filter((tab) => tab !== id));
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="w-full min-h-9 border-b border-b-slate-700 bg-[var(--navy-background)] flex flex-shrink-0">
        {allTabs
          .filter((item) => item !== "")
          .map((item, i) => (
            <div
              className={`group flex flex-row items-center justify-between px-4 py-2 text-xs font-mono border-r border-slate-800 cursor-pointer select-none transition-all min-w-0 text-slate-400 hover:text-white hover:bg-slate-800/50 ${
                item === tabs
                  ? "bg-[var(--dark-background)] text-white"
                  : "bg-[var(--navy-background)]"
              }`}
              key={i}
              onClick={() => {
                setTabs(item);
                setAllTabs((oldData) =>
                  oldData.includes(item) ? oldData : [...oldData, item]
                );
              }}
            >
              <span className="truncate whitespace-nowrap overflow-hidden max-w-[120px]">
                {item}
              </span>
              <button
                className="ml-4 text-slate-600 cursor-pointer hover:text-white transform duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(item);
                }}
              >
                x
              </button>
            </div>
          ))}
      </div>

      {/* Resizable Panel Group */}
      <ResizablePanelGroup direction="vertical" className="flex-1 w-full">
        {/* Main Content Panel */}
        <ResizablePanel ref={mainPanelRef} defaultSize={75} minSize={30}>
          <div className="flex flex-col lg:flex-row h-full overflow-hidden">
            {/* Sidebar */}
            <aside className="border-r border-slate-800 w-full lg:w-64 hidden lg:block bg-[var(--sidebar-background)] flex-shrink-0">
              <div className="relative overflow-hidden h-full">
                <div className="h-full w-full">
                  <div className="p-2">
                    <h1 className="text-slate-400 text-sm text-center uppercase">
                      File Explorer
                    </h1>
                    <div className="border-b border-b-slate-800 my-2"></div>
                    <div className="space-y-1">
                      <Accordion
                        type="multiple"
                        defaultValue={["item-1", "item-2"]}
                      >
                        <AccordionItem value="item-1" className="border-b-0">
                          <AccordionTrigger className="text-white group cursor-pointer">
                            <span className="text-yellow-400">
                              {icons.folder}
                            </span>
                            personal-info
                          </AccordionTrigger>
                          <AccordionContent className="border-l border-l-slate-400 pl-4 text-white ml-1">
                            <div className="flex items-start space-y-2 flex-col">
                              {icons.file.map((icon, i) => (
                                <div
                                  className={`text-white space-y-2 flex items-start gap-2 px-2 py-1 text-sm rounded w-full text-left cursor-pointer ${
                                    tabs === icon.title &&
                                    allTabs.find((data) => data === tabs)
                                      ? " bg-[var(--navy-background)]"
                                      : "bg-none hover:bg-slate-800 transform duration-300"
                                  }`}
                                  key={i}
                                  onClick={() => {
                                    setTabs(icon.title);
                                    setAllTabs((oldData) =>
                                      oldData.includes(icon.title)
                                        ? oldData
                                        : [...oldData, icon.title]
                                    );
                                  }}
                                >
                                  <span className="pr-2">{icon.icon}</span>{" "}
                                  {icon.title}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger className="text-white group cursor-pointer">
                            <span className="text-yellow-400">
                              {icons.folder}
                            </span>
                            skills / tech-stack
                          </AccordionTrigger>
                          <AccordionContent className="border-l border-l-slate-400 pl-4 text-white ml-1">
                            <div className="flex items-start space-y-2 flex-col">
                              {icons.skill
                                .filter(
                                  (data) =>
                                    data.title !== "os.json" &&
                                    data.title !== "css-frameworks.json" &&
                                    data.title !== "database.json" &&
                                    data.title !== "tools.json"
                                )
                                .map((icon, i) => (
                                  <div
                                    className={`text-white space-y-2 flex items-start gap-2 px-2 py-1 text-sm rounded w-full text-left cursor-pointer ${
                                      tabs === icon.title &&
                                      allTabs.find((data) => data === tabs)
                                        ? " bg-[var(--navy-background)]"
                                        : "bg-none hover:bg-slate-800 transform duration-300"
                                    }`}
                                    key={i}
                                    onClick={() => {
                                      setTabs(icon.title);
                                      setAllTabs((oldData) =>
                                        oldData.includes(icon.title)
                                          ? oldData
                                          : [...oldData, icon.title]
                                      );
                                    }}
                                  >
                                    <span className="pr-2">{icon.icon}</span>{" "}
                                    {icon.title}
                                  </div>
                                ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Navigation Toggle */}
            <div
              className="block lg:hidden w-full border border-slate-900 text-white bg-[var(--dark-background)] p-2 cursor-pointer"
              onClick={() => setOpenNav(!openNav)}
            >
              <div className="flex items-center justify-between text-sm border border-slate-700 rounded-md p-2">
                <p className="text-xs">
                  {icons.skill.find((item) => item.title === tabs)
                    ? "skill / tech-stack"
                    : "personal-info"}{" "}
                  / {tabs}
                </p>
                <IoMdArrowDown
                  className={`transition-transform duration-300 ${openNav ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {/* Mobile Sidebar - Always rendered but controlled by CSS */}
            <AboutmeSidebar
              openNav={openNav}
              setOpenNav={setOpenNav}
              tabs={tabs}
              allTabs={allTabs}
              setTabs={setTabs}
              setAllTabs={setAllTabs}
            />

            {/* Main Content Area */}
            <main className="flex-1 overflow-hidden bg-gray-900">
              <div className="h-full overflow-auto aboutme-scroll">
                <ScrollArea className="h-[100%]">
                  {tabs === icons.file[0].title &&
                    allTabs.find((data) => data === tabs) && (
                      <div className="text-white font-mono text-sm p-4">
                        {description.map((line, index) => (
                          <div className="flex" key={index}>
                            <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                              {index + 1}
                            </div>
                            <div className="text-yellow-400 text-sm">
                              {line}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                  {/* Responsibilities Tab */}
                  <Experience tabs={tabs} allTabs={allTabs} />

                  {/* Projects Tabs */}
                  <Projects tabs={tabs} allTabs={allTabs} />

                  {/* Interess Tabs */}
                  <Interests tabs={tabs} allTabs={allTabs} />

                  {/* Education Tabs */}
                  <Education tabs={tabs} allTabs={allTabs} />

                  {/* Frontend Tabs */}
                  <Frontend tabs={tabs} allTabs={allTabs} />

                  {/* Backend Tabs */}
                  <Backend tabs={tabs} allTabs={allTabs} />

                  {/* Other SKills Tabs */}
                  <OtherSkills tabs={tabs} allTabs={allTabs} />
                </ScrollArea>
              </div>
            </main>
          </div>
        </ResizablePanel>

        {/* Resizable Handle */}
        {!isOpen && (
          <ResizableHandle
            withHandle
            className="bg-slate-700 hover:bg-slate-600 transition-colors"
          />
        )}

        {/* Terminal Panel */}
        {!isOpen && (
          <ResizablePanel
            ref={terminalPanelRef}
            defaultSize={DEFAULT_TERMINAL_SIZE}
            minSize={MIN_TERMINAL_SIZE}
            maxSize={MAX_TERMINAL_SIZE}
          >
            {!isOpen && (
              <AboutMeTerminal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onExpand={expandTerminal}
                code={about_me_code}
              />
            )}
          </ResizablePanel>
        )}
        <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
      </ResizablePanelGroup>
    </div>
  );
};

export default AboutMe;
