"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import GithubCorner from "./GithubCorner";
import { developer_info } from "@/lib/developer";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const config = developer_info[0];
  const isActive = (route: string) => pathname === route;

  const navLinks = [
    { href: "/", label: "_hello" },
    { href: "/about-me", label: "_about-me" },
    { href: "/projects", label: "_projects" },
    { href: "/technology", label: "_technology" },
    { href: "/blogposts", label: "_blogposts" },
  ];

  return (
    <header className="w-full flex-shrink-0">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex w-full justify-between border-b border-[#1E2D3D] h-[45px] text-[13px]">
        <GithubCorner url="https://github.com/bunseujjy" />

        <div className="flex">
          <Link
            href="/"
            className="border-r border-[#1E2D3D] text-[var(--menu-text)] font-fira_retina px-6 h-full flex items-center hover:bg-[#1e2d3d74] hover:text-white"
          >
            {config.logo_name}
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-r border-[#1E2D3D] text-menu-text font-fira_retina px-6 h-full flex items-center hover:bg-[#1e2d3d74] hover:text-white ${
                isActive(link.href)
                  ? "border-b-2 border-[#FEA55F] text-white"
                  : "text-[var(--menu-text)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className={`border-l border-[#1E2D3D] text-menu-text font-fira_retina px-6 h-full flex items-center hover:bg-[#1e2d3d74] hover:text-white ${
            isActive("/contact")
              ? "border-b-2 border-[#FEA55F] text-white"
              : "text-[var(--menu-text)]"
          }`}
        >
          _contact-me
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden border-b border-[#1E2D3D]">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="text-white font-fira_retina text-sm">
            {config.logo_name}
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X
                size={20}
                className="text-white cursor-pointer hover:opacity-80 transform duration-300"
              />
            ) : (
              <Menu
                size={20}
                className="text-white cursor-pointer hover:opacity-80 transform duration-300"
              />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-[#1E2D3D] bg-[#011627]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-fira_retina border-b border-[#1E2D3D] hover:bg-[#1e2d3d74] ${
                  isActive(link.href)
                    ? "text-[#FEA55F]"
                    : "text-[var(--menu-text)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-fira_retina hover:bg-[#1e2d3d74] ${
                isActive("/contact")
                  ? "text-[#FEA55F]"
                  : "text-[var(--menu-text)]"
              }`}
            >
              _contact-me
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
