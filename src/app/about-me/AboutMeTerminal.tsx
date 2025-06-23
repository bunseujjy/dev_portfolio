"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { RiExpandDiagonalFill } from "react-icons/ri";

interface TerminalProps {
  isOpen: boolean;
  setIsOpen: (type: boolean) => void;
  onExpand?: () => void;
  code: string;
}

const AboutMeTerminal = ({
  isOpen,
  setIsOpen,
  onExpand,
  code,
}: TerminalProps) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedCode(code.slice(0, index * 5));

      // Auto-scroll to bottom
      if (scrollAreaRef.current) {
        // Find the scrollable viewport within ScrollArea
        const viewport = scrollAreaRef.current.querySelector(
          "[data-radix-scroll-area-viewport]"
        );
        if (viewport) {
          viewport.scrollTop = viewport.scrollHeight;
        }
      }

      index++;
      if (index > code.length) clearInterval(interval);
    }, 1);

    return () => clearInterval(interval);
  }, [code]);

  // Function to determine line styles
  const getLineStyle = (lineNumber: number) => {
    // Highlight specific lines (adjust these numbers as needed)
    const highlightedLines = [1, 12, 23, 34, 59]; // Example lines to highlight
    return {
      display: "block",
      color: highlightedLines.includes(lineNumber) ? "#ffff" : "#05df72",
    };
  };

  return (
    <div className="h-full bg-slate-900 border-t border-slate-700 rounded-b-lg">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-400 font-mono">Terminal</span>
        </div>
        <div className="flex items-center space-x-4">
          <span
            className="text-xs text-gray-500 cursor-pointer transform duration-300 hover:text-white"
            onClick={onExpand}
          >
            <RiExpandDiagonalFill size={17} />
          </span>
          <span
            className="text-xs text-gray-500 cursor-pointer transform duration-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdClose size={20} />
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="h-full overflow-hidden pb-10">
        <ScrollArea className="h-[100%] w-full" ref={scrollAreaRef}>
          <SyntaxHighlighter
            language="bash"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "0.9rem",
              fontFamily: "'Fira Code', monospace",
            }}
            showLineNumbers={true}
            wrapLines={true}
            lineProps={(lineNumber) => ({
              style: getLineStyle(lineNumber),
            })}
          >
            {displayedCode}
          </SyntaxHighlighter>
        </ScrollArea>
      </div>
    </div>
  );
};

export default AboutMeTerminal;
