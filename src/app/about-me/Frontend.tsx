import { frontend } from "@/lib/about-me-data";
import { icons } from "@/lib/icon";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FrontendProps {
  tabs: string;
  allTabs: string[];
}
const Frontend = ({ tabs, allTabs }: FrontendProps) => {
  const [wrappedSections, setWrappedSections] = useState<
    Record<number, Record<string, boolean>>
  >(() =>
    frontend.reduce((acc, _, index) => {
      acc[index] = {
        frameworks: true,
        coreSkills: true,
        cssFrameworks: true,
        apiTechnologies: true,
      };
      return acc;
    }, {} as Record<number, Record<string, boolean>>)
  );

  const toggleSection = (index: number, key: string) => {
    setWrappedSections((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [key]: !prev[index][key],
      },
    }));
  };

  const calculateLineNumbers = () => {
    let currentNumber = 1;
    const lineNumbers: Record<string, number> = {};

    frontend.forEach((front, idx) => {
      lineNumbers[`${idx}-title`] = currentNumber++;

      // Frameworks
      lineNumbers[`${idx}-frameworks`] = currentNumber++;
      if (wrappedSections[idx]?.frameworks) {
        front.frameworks.forEach((_, frameIndex) => {
          lineNumbers[`${idx}-framework-${frameIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-frameworks-closing`] = currentNumber++;
      }

      // Core Skills
      lineNumbers[`${idx}-coreSkills`] = currentNumber++;
      if (wrappedSections[idx]?.coreSkills) {
        front.coreSkills.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-coreSkill-${skillIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-coreSkills-closing`] = currentNumber++;
      }

      // CSS Frameworks
      lineNumbers[`${idx}-cssFrameworks`] = currentNumber++;
      if (wrappedSections[idx]?.cssFrameworks) {
        front.cssFrameworks.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-cssFrameworks-${skillIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-cssFrameworks-closing`] = currentNumber++;
      }

      // API Technologies
      lineNumbers[`${idx}-apiTechnologies`] = currentNumber++;
      if (wrappedSections[idx]?.apiTechnologies) {
        front.apiTechnologies.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-apiTechnologies-${skillIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-apiTechnologies-closing`] = currentNumber++;
      }
    });

    return lineNumbers;
  };

  const lineNumbers = calculateLineNumbers();

  return (
    <div>
      {tabs === icons.skill[0].title && allTabs.includes(tabs) && (
        <div className="text-white font-mono text-sm p-4">
          {frontend.map((front, frontIndex) => {
            const isFrameworksWrapped = wrappedSections[frontIndex]?.frameworks;
            const isCoreSkillsWrapped = wrappedSections[frontIndex]?.coreSkills;
            const isCssFrameworksWrapped =
              wrappedSections[frontIndex]?.cssFrameworks;
            const isApiTechnologiesWrapped =
              wrappedSections[frontIndex]?.apiTechnologies;

            return (
              <React.Fragment key={frontIndex}>
                {/* Title */}
                <div className="flex">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${frontIndex}-title`]}
                  </div>
                  <div className="text-yellow-400 text-sm">
                    title: &quot;{front.title}&quot;
                  </div>
                </div>

                {/* Frameworks Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${frontIndex}-frameworks`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">frameworks:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() => toggleSection(frontIndex, "frameworks")}
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isFrameworksWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isFrameworksWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* Frameworks Content */}
                {isFrameworksWrapped &&
                  front.frameworks.map((item, frameIndex) => (
                    <div className="flex" key={frameIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {lineNumbers[`${frontIndex}-framework-${frameIndex}`]}
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {frameIndex < front.frameworks.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isFrameworksWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${frontIndex}-frameworks-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* CoreSkills Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${frontIndex}-coreSkills`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">coreSkills:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() => toggleSection(frontIndex, "coreSkills")}
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isCoreSkillsWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isCoreSkillsWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* CoreSkills Content */}
                {isCoreSkillsWrapped &&
                  front.coreSkills.map((item, coreIndex) => (
                    <div className="flex" key={coreIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {lineNumbers[`${frontIndex}-coreSkill-${coreIndex}`]}
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {coreIndex < front.coreSkills.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isCoreSkillsWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${frontIndex}-coreSkills-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* CssFrameworks Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${frontIndex}-cssFrameworks`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">cssFrameworks:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() => toggleSection(frontIndex, "cssFrameworks")}
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isCssFrameworksWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isCssFrameworksWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* CoreSkills Content */}
                {isCssFrameworksWrapped &&
                  front.cssFrameworks.map((item, cssIndex) => (
                    <div className="flex" key={cssIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {lineNumbers[`${frontIndex}-cssFrameworks-${cssIndex}`]}
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {cssIndex < front.cssFrameworks.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isCssFrameworksWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${frontIndex}-cssFrameworks-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* Api Technologies Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${frontIndex}-apiTechnologies`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">apiTechnologies:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() =>
                        toggleSection(frontIndex, "apiTechnologies")
                      }
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isApiTechnologiesWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isApiTechnologiesWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* CoreSkills Content */}
                {isApiTechnologiesWrapped &&
                  front.apiTechnologies.map((item, apiIndex) => (
                    <div className="flex" key={apiIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {
                          lineNumbers[
                            `${frontIndex}-apiTechnologies-${apiIndex}`
                          ]
                        }
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {apiIndex < front.apiTechnologies.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isApiTechnologiesWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${frontIndex}-apiTechnologies-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Frontend;
