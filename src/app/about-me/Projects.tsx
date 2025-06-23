import { projects } from "@/lib/about-me-data";
import { icons } from "@/lib/icon";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ProjectsProps {
  tabs: string;
  allTabs: string[];
}

const Projects = ({ tabs, allTabs }: ProjectsProps) => {
  const [wrappedSections, setWrappedSections] = useState<
    Record<number, boolean>
  >(() =>
    projects.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {} as Record<number, boolean>)
  );

  // Calculate line numbers dynamically
  const calculateLineNumbers = () => {
    let currentLine = 1;
    const lineNumbers: Record<string, number> = {};

    projects.forEach((exp, expIndex) => {
      const isWrapped = wrappedSections[expIndex];

      // Project name line
      lineNumbers[`${expIndex}-projectName`] = currentLine++;

      // Project link line
      lineNumbers[`${expIndex}-projectLink`] = currentLine++;

      // Period line
      lineNumbers[`${expIndex}-period`] = currentLine++;

      // Responsibilities header line
      lineNumbers[`${expIndex}-responsibilities`] = currentLine++;

      // If wrapped, add lines for each responsibility
      if (isWrapped) {
        exp.responsibilities.forEach((_, respIndex) => {
          lineNumbers[`${expIndex}-resp-${respIndex}`] = currentLine++;
        });
        // Closing bracket line
        lineNumbers[`${expIndex}-closing`] = currentLine++;
      }

      // Comma line
      lineNumbers[`${expIndex}-comma`] = currentLine++;
    });

    return lineNumbers;
  };

  const lineNumbers = calculateLineNumbers();
  return (
    <div>
      {tabs === icons.file[2].title &&
        allTabs.find((data) => data === tabs) && (
          <div className="text-white font-mono text-sm p-4">
            {projects.map((exp, expIndex) => {
              const isWrapped = wrappedSections[expIndex];

              return (
                <React.Fragment key={expIndex}>
                  {/* Project Name */}
                  <div className="flex">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-projectName`]}
                    </div>
                    <div className="text-sm text-yellow-400">
                      projectName: &quot;{exp.projectName}&quot;
                    </div>
                  </div>

                  {/* Project Link */}
                  <div className="flex">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-projectLink`]}
                    </div>
                    <div className="text-sm text-blue-400">
                      projectLink: &quot;{exp.projectLink}&quot;
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-period`]}
                    </div>
                    <div className="text-sm text-blue-400">
                      period: &quot;{exp.period}&quot;
                    </div>
                  </div>

                  {/* Responsibilities Header */}
                  <div className="flex items-center">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-responsibilities`]}
                    </div>
                    <div className="text-sm flex items-center">
                      <span className="text-red-400">responsibilities:</span>
                      <span
                        className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300 transition-colors"
                        onClick={() =>
                          setWrappedSections((prev) => ({
                            ...prev,
                            [expIndex]: !prev[expIndex],
                          }))
                        }
                      >
                        <IoIosArrowDown
                          className={`transform transition-transform duration-300 ${
                            isWrapped ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                      <span className="text-yellow-400">
                        {isWrapped ? "[" : "[ ... ]"}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities Content (when wrapped) */}
                  {isWrapped &&
                    exp.responsibilities.map((item, respIndex) => (
                      <div className="flex" key={respIndex}>
                        <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                          {lineNumbers[`${expIndex}-resp-${respIndex}`]}
                        </div>
                        <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                          {item.content}
                          {respIndex < exp.responsibilities.length - 1
                            ? ","
                            : ""}
                        </div>
                      </div>
                    ))}

                  {/* Closing Bracket (when wrapped) */}
                  {isWrapped && (
                    <div className="flex">
                      <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                        {lineNumbers[`${expIndex}-closing`]}
                      </div>
                      <div className="text-yellow-400">]</div>
                    </div>
                  )}

                  {/* Comma */}
                  <div className="flex">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-comma`]}
                    </div>
                    <div className="text-white">,</div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
    </div>
  );
};

export default Projects;
