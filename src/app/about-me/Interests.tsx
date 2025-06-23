"use client";
import { interests } from "@/lib/about-me-data";
import { icons } from "@/lib/icon";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface InterestProps {
  tabs: string;
  allTabs: string[];
}
const Interests = ({ tabs, allTabs }: InterestProps) => {
  const [wrappedSections, setWrappedSections] = useState<
    Record<number, boolean>
  >(() =>
    interests.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {} as Record<number, boolean>)
  );

  // Calculate line numbers dynamically
  const calculateLineNumbers = () => {
    let currentLine = 1;
    const lineNumbers: Record<string, number> = {};

    interests.forEach((int, intIndex) => {
      const isWrapped = wrappedSections[intIndex];

      // Project name line
      lineNumbers[`${intIndex}-interests`] = currentLine++;
      // If wrapped, add lines for each responsibility
      if (isWrapped) {
        int.interests.forEach((_, respIndex) => {
          lineNumbers[`${intIndex}-resp-${respIndex}`] = currentLine++;
        });
        // Closing bracket line
        lineNumbers[`${intIndex}-closing`] = currentLine++;
      }
    });

    return lineNumbers;
  };

  const lineNumbers = calculateLineNumbers();
  return (
    <div>
      {tabs === icons.file[3].title &&
        allTabs.find((data) => data === tabs) && (
          <div className="text-white font-mono text-sm p-4">
            {interests.map((int, intIndex) => {
              const isWrapped = wrappedSections[intIndex];

              return (
                <React.Fragment key={intIndex}>
                  {/* Responsibilities Header */}
                  <div className="flex items-center">
                    <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                      {lineNumbers[`${intIndex}-interests`]}
                    </div>
                    <div className="text-sm flex items-center">
                      <span className="text-red-400">My Interests:</span>
                      <span
                        className="text-yellow-400 px-2 cursor-pointer hover:text-yellow-300 transition-colors"
                        onClick={() =>
                          setWrappedSections((prev) => ({
                            ...prev,
                            [intIndex]: !prev[intIndex],
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
                    int.interests.map((item, idx) => (
                      <div className="flex" key={idx}>
                        <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                          {lineNumbers[`${intIndex}-resp-${idx}`]}
                        </div>
                        <div className="text-sm text-yellow-400 whitespace-pre-wrap">
                          {item}
                          {idx < int.interests.length - 1 ? "," : ""}
                        </div>
                      </div>
                    ))}

                  {/* Closing Bracket (when wrapped) */}
                  {isWrapped && (
                    <div className="flex">
                      <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                        {lineNumbers[`${intIndex}-closing`]}
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

export default Interests;
