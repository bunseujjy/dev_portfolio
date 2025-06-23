import { otherSkills } from "@/lib/about-me-data";
import { icons } from "@/lib/icon";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface OtherSkillsProps {
  tabs: string;
  allTabs: string[];
}
const OtherSkills = ({ tabs, allTabs }: OtherSkillsProps) => {
  const [wrappedSections, setWrappedSections] = useState<
    Record<number, Record<string, boolean>>
  >(() =>
    otherSkills.reduce((acc, _, index) => {
      acc[index] = {
        dataStructures: true,
        tools: true,
        operatingSystems: true,
        otherSkills: true,
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

    otherSkills.forEach((other, idx) => {
      lineNumbers[`${idx}-title`] = currentNumber++;

      lineNumbers[`${idx}-dataStructures`] = currentNumber++;
      if (wrappedSections[idx]?.dataStructures) {
        other.dataStructures.forEach((_, frameIndex) => {
          lineNumbers[`${idx}-dataStructures-${frameIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-dataStructures-closing`] = currentNumber++;
      }

      lineNumbers[`${idx}-tools`] = currentNumber++;
      if (wrappedSections[idx]?.tools) {
        other.tools.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-tools-${skillIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-tools-closing`] = currentNumber++;
      }

      lineNumbers[`${idx}-operatingSystems`] = currentNumber++;
      if (wrappedSections[idx]?.operatingSystems) {
        other.operatingSystems.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-operatingSystems-${skillIndex}`] =
            currentNumber++;
        });
        lineNumbers[`${idx}-operatingSystems-closing`] = currentNumber++;
      }

      lineNumbers[`${idx}-otherSkills`] = currentNumber++;
      if (wrappedSections[idx]?.otherSkills) {
        other.otherSkills.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-otherSkills-${skillIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-otherSkills-closing`] = currentNumber++;
      }
    });

    return lineNumbers;
  };

  const lineNumbers = calculateLineNumbers();

  return (
    <div>
      {tabs === icons.skill[2].title && allTabs.includes(tabs) && (
        <div className="text-white font-mono text-sm p-4">
          {otherSkills.map((other, otherIndex) => {
            const isDataStructuresWrapped =
              wrappedSections[otherIndex]?.dataStructures;
            const isToolsWrapped = wrappedSections[otherIndex]?.tools;
            const isOperatingSystemWrapped =
              wrappedSections[otherIndex]?.operatingSystems;
            const isOtherSkillWrapped =
              wrappedSections[otherIndex]?.otherSkills;

            return (
              <React.Fragment key={otherIndex}>
                {/* Title */}
                <div className="flex">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${otherIndex}-title`]}
                  </div>
                  <div className="text-yellow-400 text-sm">
                    title: &quot;{other.title}&quot;
                  </div>
                </div>

                {/* Data Structures Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${otherIndex}-dataStructures`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">dataStructures:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() =>
                        toggleSection(otherIndex, "dataStructures")
                      }
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isDataStructuresWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isDataStructuresWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* dataStructures Content */}
                {isDataStructuresWrapped &&
                  other.dataStructures.map((item, dataIndex) => (
                    <div className="flex" key={dataIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {
                          lineNumbers[
                            `${otherIndex}-dataStructures-${dataIndex}`
                          ]
                        }
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {dataIndex < other.dataStructures.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isDataStructuresWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${otherIndex}-dataStructures-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* Tools Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${otherIndex}-tools`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">tools:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() => toggleSection(otherIndex, "tools")}
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isToolsWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isToolsWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* tools Content */}
                {isToolsWrapped &&
                  other.tools.map((item, toolIndex) => (
                    <div className="flex" key={toolIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {lineNumbers[`${otherIndex}-tools-${toolIndex}`]}
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {toolIndex < other.tools.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isToolsWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${otherIndex}-tools-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* Operating Systems Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${otherIndex}-operatingSystems`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">operatingSystems:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() =>
                        toggleSection(otherIndex, "operatingSystems")
                      }
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isOperatingSystemWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isOperatingSystemWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* CoreSkills Content */}
                {isOperatingSystemWrapped &&
                  other.operatingSystems.map((item, operatingIndex) => (
                    <div className="flex" key={operatingIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {
                          lineNumbers[
                            `${otherIndex}-operatingSystems-${operatingIndex}`
                          ]
                        }
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {operatingIndex < other.operatingSystems.length - 1
                          ? ","
                          : ""}
                      </div>
                    </div>
                  ))}

                {isOperatingSystemWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${otherIndex}-operatingSystems-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* Other Skills Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${otherIndex}-otherSkills`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">otherSkills:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() => toggleSection(otherIndex, "otherSkills")}
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isOtherSkillWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isOtherSkillWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* CoreSkills Content */}
                {isOtherSkillWrapped &&
                  other.otherSkills.map((item, skillIndex) => (
                    <div className="flex" key={skillIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {lineNumbers[`${otherIndex}-otherSkills-${skillIndex}`]}
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {skillIndex < other.otherSkills.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isOtherSkillWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${otherIndex}-otherSkills-closing`]}
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

export default OtherSkills;
