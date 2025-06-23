"use client";

import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  GitBranch,
  Terminal,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

interface FooterProps {
  isOpen: boolean;
  setIsOpen: (type: boolean) => void;
}
const Footer = ({ isOpen, setIsOpen }: FooterProps) => {
  return (
    <footer className="border-t border-[#1E2D3D] bg-[var(--navy-background)]">
      {isOpen && (
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 text-xs text-white border-b border-[#334155]">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <GitBranch size={12} />
              <span className="hidden sm:inline">main</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>0</span>
              <ArrowDown size={10} />
              <span>0</span>
              <ArrowUp size={10} />
            </div>
            <div
              className="flex items-center space-x-1 sm:space-x-2 bg-[#1e293b] px-2 py-1 rounded cursor-pointer transform duration-300 hover:text-white hover:opacity-60"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Terminal size={12} />
              <span className="hidden sm:inline">Terminal</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 sm:space-x-4 text-xs">
            <span>TypeScript</span>
            <span>UTF-8</span>
            <span>LF</span>
          </div>
        </div>
      )}

      {/* Social Links */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3">
        <div className="flex items-center">
          <span className="text-xs sm:text-sm text-gray-400 mr-3 sm:mr-4 border-r border-[#334155] pr-3 sm:pr-4">
            find me at:
          </span>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://x.com/bunseuxmiju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-1 sm:p-2 border-r border-[#334155]"
              title="Twitter"
            >
              <Twitter size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/bunseu-eng-6591a8333/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-1 sm:p-2 border-r border-[#334155]"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <a
          href="https://github.com/bunseujjy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-xs sm:text-sm">@bunseujjy</span>
          <Github size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
