import { Slider } from "@/components/ui/slider";
import { icons } from "@/lib/icon";
import React from "react";

interface TechnologyContentProps {
  tabs: string;
}

const TechnologyContent = (tabs: TechnologyContentProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:-grid-cols-6 gap-4">
      {icons.technology.map((icon) =>
        icon.icons
          .filter((item) => tabs.tabs === item.title)
          .map((tech, index) => (
            <div
              className="border border-slate-700 rounded-lg bg-slate-900 p-3 text-white"
              key={index}
            >
              <div className="flex ">
                {tech.icon}
                <div className="flex items-start flex-col pl-2 flex-1">
                  {tech.name}
                  <div className="w-full">
                    <Slider
                      defaultValue={[tech.percentage]}
                      max={100}
                      step={1}
                      disabled
                      className="text-yellow-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default TechnologyContent;
