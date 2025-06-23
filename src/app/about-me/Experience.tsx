import { experiences } from "@/lib/about-me-data";
import { icons } from "@/lib/icon";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ExperienceProps {
  tabs: string;
  allTabs: string[];
}

const Experience = ({ tabs, allTabs }: ExperienceProps) => {
  const [wrappedSections, setWrappedSections] = useState<
    Record<number, boolean>
  >(() =>
    experiences.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {} as Record<number, boolean>)
  );
  const [wrappedSkillsSections, setWrappedSkillsSections] = useState<
    Record<number, boolean>
  >(() =>
    experiences.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {} as Record<number, boolean>)
  );

  // Calculate line numbers dynamically
  const calculateLineNumbers = () => {
    let currentLine = 1;
    const lineNumbers: Record<string, number> = {};

    experiences.forEach((exp, expIndex) => {
      const isWrapped = wrappedSections[expIndex];
      const isSKillsWrapped = wrappedSkillsSections[expIndex];

      // Project name line
      lineNumbers[`${expIndex}-role`] = currentLine++;

      // Project link line
      lineNumbers[`${expIndex}-organization`] = currentLine++;

      // Period line
      lineNumbers[`${expIndex}-period`] = currentLine++;

      // Responsibilities header line
      lineNumbers[`${expIndex}-responsibilities`] = currentLine++;

      // skills header line
      lineNumbers[`${expIndex}-skills`] = currentLine++;

      // If wrapped, add lines for each responsibility
      if (isWrapped) {
        exp.responsibilities.forEach((_, respIndex) => {
          lineNumbers[`${expIndex}-resp-${respIndex}`] = currentLine++;
        });
        // Closing bracket line
        lineNumbers[`${expIndex}-closing`] = currentLine++;
      } else if (isSKillsWrapped) {
        exp.skills.forEach((_, respIndex) => {
          lineNumbers[`${expIndex}-resp-${respIndex}`] = currentLine++;
        });
        // Closing bracket line
        lineNumbers[`${expIndex}-closing`] = currentLine++;
      }

      // Comma line
      lineNumbers[`${expIndex}-comma`] = currentLine++;

      // SKills Comma Line
      lineNumbers[`${expIndex}-skills-comma`] = currentLine++;
    });

    return lineNumbers;
  };

  const lineNumbers = calculateLineNumbers();
  return (
    <div>
      {tabs === icons.file[1].title &&
        allTabs.find((data) => data === tabs) && (
          <div className="text-white font-mono text-sm p-4">
            {experiences.map((exp, expIndex) => {
              const isWrapped = wrappedSections[expIndex];
              const isSKillsWrapped = wrappedSkillsSections[expIndex];

              return (
                <React.Fragment key={expIndex}>
                  {/* Project Name */}
                  <div className="flex">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-role`]}
                    </div>
                    <div className="text-sm text-yellow-400">
                      role: &quot;{exp.role}&quot;
                    </div>
                  </div>

                  {/* Project Link */}
                  <div className="flex">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-organization`]}
                    </div>
                    <div className="text-sm text-blue-400">
                      organization: &quot;{exp.organization}&quot;
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

                  {/* Skills Header */}
                  <div className="flex items-center">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-skills`]}
                    </div>
                    <div className="text-sm flex items-center">
                      <span className="text-red-400">skills:</span>
                      <span
                        className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300 transition-colors"
                        onClick={() =>
                          setWrappedSkillsSections((prev) => ({
                            ...prev,
                            [expIndex]: !prev[expIndex],
                          }))
                        }
                      >
                        <IoIosArrowDown
                          className={`transform transition-transform duration-300 ${
                            isSKillsWrapped ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                      <span className="text-yellow-400">
                        {isSKillsWrapped ? "[" : "[ ... ]"}
                      </span>
                    </div>
                  </div>

                  {/* skills Content (when wrapped) */}
                  {isSKillsWrapped &&
                    exp.skills.map((item, respIndex) => (
                      <div className="flex" key={respIndex}>
                        <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                          {lineNumbers[`${expIndex}-resp-${respIndex}`]}
                        </div>
                        <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                          {item}
                          {respIndex < exp.skills.length - 1 ? "," : ""}
                        </div>
                      </div>
                    ))}

                  <div className="flex">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${expIndex}-skills-comma`]}
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

export default Experience;
