"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const codes = [
  `$ cd Developer/Kubilaybzk
$ npm i
+ react@latest
+ react-dom@latest
+ next@latest
+ typescript@latest
+ tailwindcss@latest
+ eslint@latest
+ prettier@latest
+ framer-motion@latest
+ react-syntax-highlighter@latest
✓ Paketler başarıyla yüklendi.
$ code .`,
  `const motivation = () => {
  while(true) {
    learn();
    build();
    share();
    if (tired) rest();
  }
};`,

  `function createAwesomePortfolio(name: string): Portfolio {
  return {
    Developer: 'Eng Bunseu',
    techStack: ['React', 'Next.js', 'Vue', 'Nuxt.js', 
    'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Docker'],
    aim: '🚀 Front-end Developer',
    openToWork: true,
  };
}`,
];
export default function TerminalSnippet() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [codeIndex, setCodeIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentCode = codes[codeIndex];
      setDisplayedCode(currentCode.slice(0, charIndex));
      charIndex++;

      const ele = document.getElementById("container");
      if (ele) {
        ele.scrollTop = ele?.scrollHeight;
      }
      if (charIndex > currentCode.length) {
        // Pause before switching to next code snippet
        timeoutId = setTimeout(() => {
          charIndex = 0;
          setCodeIndex((prev) => (prev + 1) % codes.length);
        }, 500); // 1.5 seconds pause
      } else {
        timeoutId = setTimeout(type, 20);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [codeIndex]);
  return (
    <div className="relative hidden lg:flex flex-col gap-4 justify-center order-1 lg:order-2 h-full my-auto ">
      <div className="relative w-full h-full transition-all duration-350  shadow-2xl min-h-[240px]">
        {/* Terminal top bar */}
        <div className="jsx-75ecec9be69de278 flex items-center gap-2 px-4 py-1.5 bg-[#e0e0e0] rounded-t-2xl border-b border-slate-300 select-none relative">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex flex-1 justify-center left-0 right-0">
            <span className="text-sm text-slate-700 text-center font-semibold">
              Terminal — bunseueng@portfolio
            </span>
          </div>
        </div>
        <div className="rounded-b-2xl overflow-hidden bg-[#181c23] border-t-0 border border-slate-700 p-0 sm:p-2 min-h-0 h-full w-full flex flex-col">
          <div className="bg-[#0f172a] rounded-xl p-4 font-mono text-xs text-slate-300 shadow-2xl min-h-0 w-full flex flex-col border border-slate-700 transition-all duration-300 home-terminal h-full">
            {/* Syntax highlighted code */}
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "1rem",
                background: "transparent",
                fontSize: "0.9rem",
                backgroundColor: "#181c23",
                height: "100%",
                overflow: "auto",
              }}
              id="container"
              showLineNumbers={true}
            >
              {displayedCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
