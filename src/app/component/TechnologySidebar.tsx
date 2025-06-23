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

const TechnologySidebar = ({
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
                <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white group cursor-pointer">
                      <span className="text-yellow-400">{icons.folder}</span>
                      skills / tech-stack
                    </AccordionTrigger>

                    <AccordionContent className="border-l border-l-slate-400 pl-2 text-white ml-1">
                      <div className="flex items-start space-y-2 flex-col">
                        {icons.skill
                          .filter((item) => item.title !== "others.json")
                          .map((icon, i) => (
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
      </div>
    </>
  );
};

export default TechnologySidebar;
