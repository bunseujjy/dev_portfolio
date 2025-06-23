import { backend } from "@/lib/about-me-data";
import { icons } from "@/lib/icon";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface BackendProps {
  tabs: string;
  allTabs: string[];
}
const Backend = ({ tabs, allTabs }: BackendProps) => {
  const [wrappedSections, setWrappedSections] = useState<
    Record<number, Record<string, boolean>>
  >(() =>
    backend.reduce((acc, _, index) => {
      acc[index] = {
        programmingLanguages: true,
        frameworks: true,
        databases: true,
        apiServices: true,
        otherTechnologies: true,
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

    backend.forEach((back, idx) => {
      lineNumbers[`${idx}-title`] = currentNumber++;

      lineNumbers[`${idx}-programmingLanguages`] = currentNumber++;
      if (wrappedSections[idx]?.programmingLanguages) {
        back.programmingLanguages.forEach((_, frameIndex) => {
          lineNumbers[`${idx}-programmingLanguages-${frameIndex}`] =
            currentNumber++;
        });
        lineNumbers[`${idx}-programmingLanguages-closing`] = currentNumber++;
      }

      lineNumbers[`${idx}-frameworks`] = currentNumber++;
      if (wrappedSections[idx]?.frameworks) {
        back.frameworks.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-frameworks-${skillIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-frameworks-closing`] = currentNumber++;
      }

      lineNumbers[`${idx}-databases`] = currentNumber++;
      if (wrappedSections[idx]?.databases) {
        back.databases.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-databases-${skillIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-databases-closing`] = currentNumber++;
      }

      lineNumbers[`${idx}-apiServices`] = currentNumber++;
      if (wrappedSections[idx]?.apiServices) {
        back.apiServices.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-apiServices-${skillIndex}`] = currentNumber++;
        });
        lineNumbers[`${idx}-apiServices-closing`] = currentNumber++;
      }

      lineNumbers[`${idx}-otherTechnologies`] = currentNumber++;
      if (wrappedSections[idx]?.otherTechnologies) {
        back.otherTechnologies.forEach((_, skillIndex) => {
          lineNumbers[`${idx}-otherTechnologies-${skillIndex}`] =
            currentNumber++;
        });
        lineNumbers[`${idx}-otherTechnologies-closing`] = currentNumber++;
      }
    });

    return lineNumbers;
  };

  const lineNumbers = calculateLineNumbers();

  return (
    <div>
      {tabs === icons.skill[1].title && allTabs.includes(tabs) && (
        <div className="text-white font-mono text-sm p-4">
          {backend.map((back, backIndex) => {
            const isProgrammingLanguagesWrapped =
              wrappedSections[backIndex]?.programmingLanguages;
            const isFrameworksWrapped = wrappedSections[backIndex]?.frameworks;
            const isDatabasesWrapped = wrappedSections[backIndex]?.databases;
            const isApiServicesWrapped =
              wrappedSections[backIndex]?.apiServices;
            const isOtherTechnologiesWrapped =
              wrappedSections[backIndex]?.otherTechnologies;

            return (
              <React.Fragment key={backIndex}>
                {/* Title */}
                <div className="flex">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${backIndex}-title`]}
                  </div>
                  <div className="text-yellow-400 text-sm">
                    title: &quot;{back.title}&quot;
                  </div>
                </div>

                {/* Programming Languages Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${backIndex}-programmingLanguages`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">programmingLanguages:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() =>
                        toggleSection(backIndex, "programmingLanguages")
                      }
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isProgrammingLanguagesWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isProgrammingLanguagesWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* programmingLanguages Content */}
                {isProgrammingLanguagesWrapped &&
                  back.programmingLanguages.map((item, proIndex) => (
                    <div className="flex" key={proIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {
                          lineNumbers[
                            `${backIndex}-programmingLanguages-${proIndex}`
                          ]
                        }
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {proIndex < back.programmingLanguages.length - 1
                          ? ","
                          : ""}
                      </div>
                    </div>
                  ))}

                {isProgrammingLanguagesWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${backIndex}-programmingLanguages-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* Frameworks Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${backIndex}-frameworks`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">frameworks:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() => toggleSection(backIndex, "frameworks")}
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

                {/* frameworks Content */}
                {isFrameworksWrapped &&
                  back.frameworks.map((item, frameIndex) => (
                    <div className="flex" key={frameIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {lineNumbers[`${backIndex}-frameworks-${frameIndex}`]}
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {frameIndex < back.frameworks.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isFrameworksWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${backIndex}-frameworks-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* Databases Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${backIndex}-databases`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">databases:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() => toggleSection(backIndex, "databases")}
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isDatabasesWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isDatabasesWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* Databases Content */}
                {isDatabasesWrapped &&
                  back.databases.map((item, dataIndex) => (
                    <div className="flex" key={dataIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {lineNumbers[`${backIndex}-databases-${dataIndex}`]}
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {dataIndex < back.databases.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isDatabasesWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${backIndex}-databases-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* Api Services Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${backIndex}-apiServices`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">apiServices:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() => toggleSection(backIndex, "apiServices")}
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isApiServicesWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isApiServicesWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* API Services Content */}
                {isApiServicesWrapped &&
                  back.apiServices.map((item, apiIndex) => (
                    <div className="flex" key={apiIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {lineNumbers[`${backIndex}-apiServices-${apiIndex}`]}
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {apiIndex < back.apiServices.length - 1 ? "," : ""}
                      </div>
                    </div>
                  ))}

                {isApiServicesWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${backIndex}-apiServices-closing`]}
                    </div>
                    <div className="text-yellow-400">]</div>
                  </div>
                )}

                {/* Other Technologies Header */}
                <div className="flex items-center">
                  <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                    {lineNumbers[`${backIndex}-otherTechnologies`]}
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="text-red-400">otherTechnologies:</span>
                    <span
                      className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300"
                      onClick={() =>
                        toggleSection(backIndex, "otherTechnologies")
                      }
                    >
                      <IoIosArrowDown
                        className={`transform transition-transform duration-300 ${
                          isOtherTechnologiesWrapped ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <span className="text-yellow-400">
                      {isOtherTechnologiesWrapped ? "[" : "[ ... ]"}
                    </span>
                  </div>
                </div>

                {/* API Services Content */}
                {isOtherTechnologiesWrapped &&
                  back.otherTechnologies.map((item, otherIndex) => (
                    <div className="flex" key={otherIndex}>
                      <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                        {
                          lineNumbers[
                            `${backIndex}-otherTechnologies-${otherIndex}`
                          ]
                        }
                      </div>
                      <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                        {item}
                        {otherIndex < back.otherTechnologies.length - 1
                          ? ","
                          : ""}
                      </div>
                    </div>
                  ))}

                {isOtherTechnologiesWrapped && (
                  <div className="flex">
                    <div className="w-8 text-gray-500 text-right pr-3 text-xs md:text-sm">
                      {lineNumbers[`${backIndex}-otherTechnologies-closing`]}
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

export default Backend;
