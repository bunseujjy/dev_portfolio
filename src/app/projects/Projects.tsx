"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { icons } from "@/lib/icon";
import React, { useRef, useState } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import AboutMeTerminal from "../about-me/AboutMeTerminal";
import Footer from "../component/Footer";
import Image from "next/image";
import {
  nextjs_project,
  nuxtjs_project,
  reactjs_project,
  vuejs_project,
} from "@/lib/projects-data";
import { Button } from "@/components/ui/button";
import { TbEyeSearch } from "react-icons/tb";
import { DiGithub } from "react-icons/di";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectInfo from "./ProjectInfo";
import { projects_code } from "@/lib/terminalcode";
import { IoMdArrowDown } from "react-icons/io";
import ProjectSidebar from "../component/ProjectSidebar";

const Projects = () => {
  const [tabs, setTabs] = useState("projects.json");
  const [allTabs, setAllTabs] = useState(["projects.json"]);
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
    const updatedTabs = allTabs.filter((tab) => tab !== id);
    setAllTabs(updatedTabs);

    // If the removed tab was the active tab, switch to the first remaining tab
    if (tabs === id && updatedTabs.length > 0) {
      setTabs(updatedTabs[0]);
    }
  };

  const addTab = (tabName: string) => {
    setTabs(tabName);
    setAllTabs((oldData) =>
      oldData.includes(tabName) ? oldData : [...oldData, tabName]
    );
  };
  // Function to get project key based on tab name
  const getProjectKey = (tabName: string): string | null => {
    const projectMapping: Record<string, string> = {
      MijuDramaInfo: "mijudramainfo",
      LusiEcommerce: "lusiecommerce",
      AceVoting: "acevoting",
      CamJobFindr: "camjobfindr",
      Portfolio: "portfolio",
      SangzhiStore: "sangzhistore",
      MijuBlog: "mijublog",
      MijuChat: "mijuchat",
    };
    return projectMapping[tabName] || null;
  };
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="w-full min-h-9 border-b border-b-slate-700 bg-[var(--navy-background)] flex flex-shrink-0">
        {allTabs
          .filter((item) => item !== "")
          .map((tab, i) => (
            <div
              key={i}
              className={`group flex flex-row items-center justify-between px-4 py-2 text-xs font-mono border-r border-slate-800 cursor-pointer select-none transition-all min-w-0 text-slate-400 hover:text-white hover:bg-slate-800/50
                 ${
                   tab === tabs
                     ? "bg-[var(--dark-background)] text-white"
                     : "bg-[var(--navy-background)]"
                 }
                `}
              onClick={() => setTabs(tab)}
            >
              <span className="truncate whitespace-nowrap overflow-hidden max-w-[120px]">
                {tab}
              </span>
              <button
                className="ml-4 text-slate-600 cursor-pointer hover:text-white transform duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(tab);
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
          <div className="flex flex-col lg:flex-row h-full overflow-hidden relative">
            {/* Sidebar */}
            <aside className="border-r border-slate-800 w-full lg:w-64 hidden lg:block bg-[var(--sidebar-background)] flex-shrink-0 ">
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
                        defaultValue={[
                          "item-1",
                          "item-2",
                          "item-3",
                          "item-4",
                          "item-5",
                        ]}
                      >
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-white group cursor-pointer">
                            <span className="text-yellow-400">
                              {icons.folder}
                            </span>
                            personal-info
                          </AccordionTrigger>
                          <AccordionContent className="border-l border-l-slate-400 pl-4 text-white ml-1">
                            <AccordionItem
                              value="item-2"
                              className="border-b-0!"
                            >
                              <AccordionTrigger className="text-white group cursor-pointer py-0">
                                <span className="text-yellow-400">
                                  {icons.nextjs[0].icons}
                                </span>{" "}
                                Nextjs
                              </AccordionTrigger>
                              <AccordionContent className="border-l border-l-slate-400 pl-2 text-white ml-1">
                                <div className="flex items-start space-y-2 flex-col pt-2">
                                  {icons.nextjs.map((icon, i) => (
                                    <div
                                      className={`text-white flex items-start gap-2 px-2 py-1 text-xs rounded w-full text-left cursor-pointer ${
                                        tabs === icon.title &&
                                        allTabs.find((data) => data === tabs)
                                          ? " bg-[var(--navy-background)]"
                                          : "bg-none hover:bg-slate-800 transform duration-300"
                                      }`}
                                      key={i}
                                      onClick={() => addTab(icon.title)}
                                    >
                                      <span className="pr-2">{icon.icons}</span>{" "}
                                      {icon.title}
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                              value="item-3"
                              className="border-b-0! mt-4"
                            >
                              <AccordionTrigger className="text-white group cursor-pointer py-0">
                                <span className="text-yellow-400">
                                  {icons.nuxtjs[0].icons}
                                </span>{" "}
                                NuxtJs
                              </AccordionTrigger>
                              <AccordionContent className="border-l border-l-slate-400 pl-2 text-white ml-1">
                                <div className="flex items-start space-y-2 flex-col pt-2">
                                  {icons.nuxtjs.map((icon, i) => (
                                    <div
                                      className={`text-white flex items-start gap-2 px-2 py-1 text-xs rounded w-full text-left cursor-pointer ${
                                        tabs === icon.title &&
                                        allTabs.find((data) => data === tabs)
                                          ? " bg-[var(--navy-background)]"
                                          : "bg-none hover:bg-slate-800 transform duration-300"
                                      }`}
                                      key={i}
                                      onClick={() => addTab(icon.title)}
                                    >
                                      <span className="pr-2">{icon.icons}</span>{" "}
                                      {icon.title}
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                              value="item-4"
                              className="border-b-0! mt-4"
                            >
                              <AccordionTrigger className="text-white group cursor-pointer py-0">
                                <span className="text-yellow-400">
                                  {icons.reactjs[0].icons}
                                </span>{" "}
                                ReactJs
                              </AccordionTrigger>
                              <AccordionContent className="border-l border-l-slate-400 pl-2 text-white ml-1">
                                <div className="flex items-start space-y-2 flex-col pt-2">
                                  {icons.reactjs.map((icon, i) => (
                                    <div
                                      className={`text-white flex items-start gap-2 px-2 py-1 text-xs rounded w-full text-left cursor-pointer ${
                                        tabs === icon.title &&
                                        allTabs.find((data) => data === tabs)
                                          ? " bg-[var(--navy-background)]"
                                          : "bg-none hover:bg-slate-800 transform duration-300"
                                      }`}
                                      key={i}
                                      onClick={() => addTab(icon.title)}
                                    >
                                      <span className="pr-2">{icon.icons}</span>{" "}
                                      {icon.title}
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                              value="item-5"
                              className="border-b-0! mt-4"
                            >
                              <AccordionTrigger className="text-white group cursor-pointer py-0">
                                <span className="text-yellow-400">
                                  {icons.vuejs[0].icons}
                                </span>{" "}
                                VueJs
                              </AccordionTrigger>
                              <AccordionContent className="border-l border-l-slate-400 pl-2 text-white ml-1">
                                <div className="flex items-start space-y-2 flex-col pt-2">
                                  {icons.vuejs.map((icon, i) => (
                                    <div
                                      className={`text-white flex items-start gap-2 px-2 py-1 text-xs rounded w-full text-left cursor-pointer ${
                                        tabs === icon.title &&
                                        allTabs.find((data) => data === tabs)
                                          ? " bg-[var(--navy-background)]"
                                          : "bg-none hover:bg-slate-800 transform duration-300"
                                      }`}
                                      key={i}
                                      onClick={() => addTab(icon.title)}
                                    >
                                      <span className="pr-2">{icon.icons}</span>{" "}
                                      {icon.title}
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
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
                <p className="text-xs">personal-info / {tabs}</p>
                <IoMdArrowDown
                  className={`transition-transform duration-300 ${openNav ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {/* Mobile Sidebar - Always rendered but controlled by CSS */}
            <ProjectSidebar
              openNav={openNav}
              setOpenNav={setOpenNav}
              tabs={tabs}
              allTabs={allTabs}
              addTab={addTab}
            />

            {/* Content */}
            <div className="flex flex-col w-full h-full">
              {tabs === "projects.json" && (
                <ScrollArea className="h-full p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {[
                      ...nextjs_project,
                      ...reactjs_project,
                      ...nuxtjs_project,
                      ...vuejs_project,
                    ].map((project, index) => {
                      return (
                        <div
                          className="flex flex-col border border-slate-700 rounded-lg overflow-hidden"
                          key={index}
                        >
                          <div className="w-full h-48 border-b border-b-slate-600">
                            <Image
                              src={`${project.image}`}
                              alt="project-thumbnail"
                              width={500}
                              height={500}
                              quality={100}
                              className="w-full h-full object-cover bg-center"
                            />
                          </div>
                          <div className="text-white p-4 space-y-4 flex-1 flex flex-col">
                            <div className="flex items-center">
                              <span className="text-blue-400 text-sm md:text-md">
                                {project.project}
                              </span>
                              <span className="text-blue-200 text-xs md:text-sm pl-2">
                                {project.title.length > 25
                                  ? project.title.slice(0, 25) + "..."
                                  : project.title}
                              </span>
                            </div>
                            <p className="text-slate-200 text-xs flex-1">
                              {project.description.length > 150
                                ? project.description.slice(0, 150) + "..."
                                : project.description}
                            </p>
                            <div className="flex items-center space-x-2 mt-auto">
                              <Button
                                className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer text-xs px-2 py-1"
                                onClick={() => addTab(project.slug)}
                              >
                                _view_project
                              </Button>

                              <Link
                                href={`${project.live_site}`}
                                target="_blank"
                              >
                                <Button
                                  className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer p-2"
                                  title="Project Domain"
                                >
                                  <TbEyeSearch size={16} />
                                </Button>
                              </Link>
                              {project.github_url && (
                                <Link
                                  href={`${project.github_url}`}
                                  target="_blank"
                                >
                                  <Button
                                    className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer p-2"
                                    title="Github Repository"
                                  >
                                    <DiGithub size={16} />
                                  </Button>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              )}

              {/* Dynamic Project Info based on selected tab */}
              {getProjectKey(tabs) && (
                <ScrollArea className="h-full">
                  <ProjectInfo projectKey={getProjectKey(tabs)!} />
                </ScrollArea>
              )}
            </div>
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
                code={projects_code}
              />
            )}
          </ResizablePanel>
        )}
        <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
      </ResizablePanelGroup>
    </div>
  );
};

export default Projects;
