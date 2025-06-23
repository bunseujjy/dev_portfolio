"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { icons } from "@/lib/icon";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

interface SidebarProps {
  openNav: boolean;
  setOpenNav: (openNav: boolean) => void;
  tabs: string;
  allTabs: string[];
  addTab: (title: string) => void;
}

const ProjectSidebar = ({
  openNav,
  setOpenNav,
  tabs,
  allTabs,
  addTab,
}: SidebarProps) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openNav]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openNav) {
        setOpenNav(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [openNav, setOpenNav]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          openNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenNav(false)}
        aria-hidden="true"
      />

      {/* Sidebar Container */}
      <div
        className={`lg:hidden fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-[var(--sidebar-background)] border-r border-slate-800 shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          openNav ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation sidebar"
      >
        {/* Sidebar Inner Container */}
        <div className="flex h-full flex-col">
          {/* Header */}
          <div
            className={`flex items-center justify-between p-4 border-b border-slate-800 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              openNav
                ? "translate-y-0 opacity-100 delay-150"
                : "-translate-y-4 opacity-0 delay-0"
            }`}
          >
            <h1 className="text-slate-400 text-sm uppercase font-medium tracking-wider">
              File Explorer
            </h1>
            <button
              onClick={() => setOpenNav(false)}
              className={`text-slate-400 hover:text-white transition-all duration-300 ease-out p-2 rounded-lg hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600 hover:scale-110 active:scale-95 ${
                openNav
                  ? "rotate-0 opacity-100 delay-200"
                  : "rotate-180 opacity-0 delay-0"
              }`}
              aria-label="Close sidebar"
            >
              <IoMdClose size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              <div className="p-4">
                <Accordion
                  type="multiple"
                  defaultValue={[
                    "item-1",
                    "item-2",
                    "item-3",
                    "item-4",
                    "item-5",
                  ]}
                  className="space-y-2"
                >
                  <AccordionItem
                    value="item-1"
                    className={`border-none transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      openNav
                        ? "translate-y-0 opacity-100 delay-300"
                        : "translate-y-6 opacity-0 delay-0"
                    }`}
                  >
                    <AccordionTrigger className="text-white hover:text-slate-300 transition-all duration-300 ease-out hover:bg-slate-800/30 rounded-lg px-3 py-3 group [&[data-state=open]>div>svg]:rotate-90 focus:outline-none focus:ring-2 focus:ring-slate-600 hover:scale-[1.02] active:scale-[0.98]">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-400 text-lg transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-12">
                          {icons.folder}
                        </span>
                        <span className="text-base font-medium">
                          personal-info
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pb-2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                        openNav ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="ml-6 border-l-2 border-slate-700/50 pl-4 space-y-3 mt-2">
                        {/* Next.js Section */}
                        <AccordionItem
                          value="item-2"
                          className={`border-none transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                            openNav
                              ? "translate-x-0 opacity-100 delay-400"
                              : "-translate-x-4 opacity-0 delay-0"
                          }`}
                        >
                          <AccordionTrigger className="text-white hover:text-slate-300 transition-all duration-300 ease-out hover:bg-slate-800/30 rounded-lg px-3 py-2 text-sm group [&[data-state=open]>div>svg]:rotate-90 focus:outline-none focus:ring-2 focus:ring-slate-600 hover:scale-[1.02] active:scale-[0.98]">
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-400 transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-12">
                                {icons.nextjs[0].icons}
                              </span>
                              <span className="font-medium">Next.js</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="ml-4 space-y-1 mt-2">
                              {icons.nextjs.map((icon, i) => (
                                <button
                                  key={i}
                                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] active:scale-[0.97] group focus:outline-none focus:ring-2 focus:ring-slate-600 ${
                                    tabs === icon.title &&
                                    allTabs.find((data) => data === tabs)
                                      ? "bg-[var(--navy-background)] text-white shadow-lg border border-slate-600/50 scale-[1.02]"
                                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white hover:shadow-md"
                                  } ${
                                    openNav
                                      ? `translate-x-0 opacity-100 delay-[${500 + i * 50}ms]`
                                      : "-translate-x-6 opacity-0 delay-0"
                                  }`}
                                  onClick={() => {
                                    addTab(icon.title);
                                    setOpenNav(false);
                                  }}
                                >
                                  <span className="transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 text-base">
                                    {icon.icons}
                                  </span>
                                  <span className="font-medium transition-all duration-200 ease-out">
                                    {icon.title}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Nuxt.js Section */}
                        <AccordionItem
                          value="item-3"
                          className={`border-none transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                            openNav
                              ? "translate-x-0 opacity-100 delay-500"
                              : "-translate-x-4 opacity-0 delay-0"
                          }`}
                        >
                          <AccordionTrigger className="text-white hover:text-slate-300 transition-all duration-300 ease-out hover:bg-slate-800/30 rounded-lg px-3 py-2 text-sm group [&[data-state=open]>div>svg]:rotate-90 focus:outline-none focus:ring-2 focus:ring-slate-600 hover:scale-[1.02] active:scale-[0.98]">
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-400 transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-12">
                                {icons.nuxtjs[0].icons}
                              </span>
                              <span className="font-medium">Nuxt.js</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="ml-4 space-y-1 mt-2">
                              {icons.nuxtjs.map((icon, i) => (
                                <button
                                  key={i}
                                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] active:scale-[0.97] group focus:outline-none focus:ring-2 focus:ring-slate-600 ${
                                    tabs === icon.title &&
                                    allTabs.find((data) => data === tabs)
                                      ? "bg-[var(--navy-background)] text-white shadow-lg border border-slate-600/50 scale-[1.02]"
                                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white hover:shadow-md"
                                  } ${
                                    openNav
                                      ? `translate-x-0 opacity-100 delay-[${600 + i * 50}ms]`
                                      : "-translate-x-6 opacity-0 delay-0"
                                  }`}
                                  onClick={() => {
                                    addTab(icon.title);
                                    setOpenNav(false);
                                  }}
                                >
                                  <span className="transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 text-base">
                                    {icon.icons}
                                  </span>
                                  <span className="font-medium transition-all duration-200 ease-out">
                                    {icon.title}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        {/* React.js Section */}
                        <AccordionItem
                          value="item-4"
                          className={`border-none transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                            openNav
                              ? "translate-x-0 opacity-100 delay-600"
                              : "-translate-x-4 opacity-0 delay-0"
                          }`}
                        >
                          <AccordionTrigger className="text-white hover:text-slate-300 transition-all duration-300 ease-out hover:bg-slate-800/30 rounded-lg px-3 py-2 text-sm group [&[data-state=open]>div>svg]:rotate-90 focus:outline-none focus:ring-2 focus:ring-slate-600 hover:scale-[1.02] active:scale-[0.98]">
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-400 transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-12">
                                {icons.reactjs[0].icons}
                              </span>
                              <span className="font-medium">React.js</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="ml-4 space-y-1 mt-2">
                              {icons.reactjs.map((icon, i) => (
                                <button
                                  key={i}
                                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] active:scale-[0.97] group focus:outline-none focus:ring-2 focus:ring-slate-600 ${
                                    tabs === icon.title &&
                                    allTabs.find((data) => data === tabs)
                                      ? "bg-[var(--navy-background)] text-white shadow-lg border border-slate-600/50 scale-[1.02]"
                                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white hover:shadow-md"
                                  } ${
                                    openNav
                                      ? `translate-x-0 opacity-100 delay-[${700 + i * 50}ms]`
                                      : "-translate-x-6 opacity-0 delay-0"
                                  }`}
                                  onClick={() => {
                                    addTab(icon.title);
                                    setOpenNav(false);
                                  }}
                                >
                                  <span className="transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 text-base">
                                    {icon.icons}
                                  </span>
                                  <span className="font-medium transition-all duration-200 ease-out">
                                    {icon.title}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Vue.js Section */}
                        <AccordionItem
                          value="item-5"
                          className={`border-none transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                            openNav
                              ? "translate-x-0 opacity-100 delay-700"
                              : "-translate-x-4 opacity-0 delay-0"
                          }`}
                        >
                          <AccordionTrigger className="text-white hover:text-slate-300 transition-all duration-300 ease-out hover:bg-slate-800/30 rounded-lg px-3 py-2 text-sm group [&[data-state=open]>div>svg]:rotate-90 focus:outline-none focus:ring-2 focus:ring-slate-600 hover:scale-[1.02] active:scale-[0.98]">
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-400 transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-12">
                                {icons.vuejs[0].icons}
                              </span>
                              <span className="font-medium">Vue.js</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="ml-4 space-y-1 mt-2">
                              {icons.vuejs.map((icon, i) => (
                                <button
                                  key={i}
                                  className={`w-full text-left flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] active:scale-[0.97] group focus:outline-none focus:ring-2 focus:ring-slate-600 ${
                                    tabs === icon.title &&
                                    allTabs.find((data) => data === tabs)
                                      ? "bg-[var(--navy-background)] text-white shadow-lg border border-slate-600/50 scale-[1.02]"
                                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white hover:shadow-md"
                                  } ${
                                    openNav
                                      ? `translate-x-0 opacity-100 delay-[${800 + i * 50}ms]`
                                      : "-translate-x-6 opacity-0 delay-0"
                                  }`}
                                  onClick={() => {
                                    addTab(icon.title);
                                    setOpenNav(false);
                                  }}
                                >
                                  <span className="transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 text-base">
                                    {icon.icons}
                                  </span>
                                  <span className="font-medium transition-all duration-200 ease-out">
                                    {icon.title}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSidebar;
