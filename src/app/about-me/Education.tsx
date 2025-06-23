import { education } from "@/lib/about-me-data";
import { icons } from "@/lib/icon";
import React from "react";

interface EducationProps {
  tabs: string;
  allTabs: string[];
}
const Education = ({ tabs, allTabs }: EducationProps) => {
  const calculateLineNumbers = () => {
    let currentLine = 1;
    const lineNumbers: Record<string, number> = {};

    education.forEach((_, index) => {
      lineNumbers[`${index}-edu`] = currentLine++;
      lineNumbers[`${index}-school`] = currentLine++;
      lineNumbers[`${index}-graduation`] = currentLine++;
    });

    return lineNumbers;
  };

  const lineNumbers = calculateLineNumbers();
  return (
    <div>
      {tabs === icons.file[4].title &&
        allTabs.find((data) => data === tabs) && (
          <div className="text-white font-mono text-sm p-4">
            {education.map((edu, idx) => (
              <div key={idx}>
                <div className="flex">
                  <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                    {lineNumbers[`${idx}-edu`]}
                  </div>
                  <div className="text-sm text-red-400">
                    education:{" "}
                    <span className="text-yellow-400">
                      &quot;{edu.education}&quot;
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                    {lineNumbers[`${idx}-school`]}
                  </div>
                  <div className="text-sm  text-red-400">
                    school:{" "}
                    <span className="text-yellow-400">
                      &quot;{edu.school}&quot;
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-8 text-gray-500 font-mono text-right pr-3 select-none flex-shrink-0 text-xs md:text-sm">
                    {lineNumbers[`${idx}-graduation`]}
                  </div>
                  <div className="text-sm  text-red-400">
                    graduationYears:{" "}
                    <span className="text-yellow-400">
                      &quot;{edu.graduationYears}&quot;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default Education;
