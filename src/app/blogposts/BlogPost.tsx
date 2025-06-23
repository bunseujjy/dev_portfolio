"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { icons } from "@/lib/icon";
import React, { useRef, useState } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import AboutMeTerminal from "../about-me/AboutMeTerminal";
import Footer from "../component/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import BlogPostContent from "./BlogPostContent";
import { about_me_code } from "@/lib/terminalcode";
import { IoMdArrowDown } from "react-icons/io";
import BlogPostSidebar from "../component/BlogPostSidebar";

const BlogPosts = () => {
  const [tabs, setTabs] = useState("Nextjs");
  const [allTabs, setAllTabs] = useState(["Nextjs"]);
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
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-white group cursor-pointer">
                            <span className="text-yellow-400">
                              {icons.mdFolder}
                            </span>
                            medium-blogs
                          </AccordionTrigger>

                          <AccordionContent className="border-l border-l-slate-400 pl-2 text-white ml-1">
                            <div className="flex items-start space-y-2 flex-col">
                              {icons.mediumblog.map((icon, i) => (
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
                <p className="text-xs">meduim-blogs / {tabs}</p>
                <IoMdArrowDown
                  className={`transition-transform duration-300 ${openNav ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {/* Mobile Sidebar - Always rendered but controlled by CSS */}
            <BlogPostSidebar
              openNav={openNav}
              setOpenNav={setOpenNav}
              tabs={tabs}
              allTabs={allTabs}
              addTab={addTab}
            />
            {/* Content */}
            <div className="flex flex-col w-full h-full">
              {icons.mediumblog.find((md) => md.title === tabs) && (
                <ScrollArea className="h-full p-4">
                  <BlogPostContent tabs={tabs} />
                </ScrollArea>
              )}
            </div>
          </div>
        </ResizablePanel>
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

export default BlogPosts;
