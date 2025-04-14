"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const courses = [
  {
    id: 1,
    href: "blockchain-cybersecurity",
    name: "Blockchain Cybersecurity",
    allowed: true,
  },
  { id: 5, href: "marketing", name: "Web3 Marketing", allowed: true },
  {
    id: 4,
    href: "technical-writing",
    name: "Web3 Technical Writing",
    allowed: true,
  },
  {
    id: 2,
    href: "smart-contract-development",
    name: "Smart Contract Development",
    allowed: true,
  },
  {
    id: 3,
    href: "web3-research",
    name: "Web3 Research",
    allowed: true,
  },
  {
    id: 8,
    href: "ai-agent",
    name: "AI Agent",
    allowed: true,
  },
  {
    id: 4,
    href: "data analysis",
    name: "Data Analysis (Coming Soon)",
    allowed: false,
  },
  {
    id: 7,
    href: "web3 UI/UX design",
    name: "Web3 UI/UX Design (Coming Soon)",
    allowed: false,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <nav className="bgblack text-white pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              <Image src="/logo.svg" alt="logo" width={130} height={32} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="hover:bg-slate-900 px-3 py-2 rounded-md"
              >
                Home
              </Link>

              <div className="h-0.5 w-0.5 bg-white rounded-full"></div>

              <Link href="/courses">Courses</Link>

              <div className="h-0.5 w-0.5 bg-white rounded-full"></div>

              <Link
                href="/about"
                className="hover:bg-slate-900 px-3 py-2 rounded-md"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-1focus:ring-offset-2focus:ring-offset-gray-800focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-8 w-8 text-white" />
              ) : (
                <Menu className="block h-8 w-8 text-white" />
              )}
            </button>
          </div>

          {/*  */}
          <div className="hidden md:flex">
            <Link
              href={"/payment"}
              className="bg-[#8D58FF4D] rounded-[12px] inline-flex items-center p-1.5"
            >
              <Button className="py-3 transition-colors duration-300">
                Apply Now <MdArrowForwardIos size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-black md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false);
              }}
              className="block hover:bg-slate-950 px-3 py-2 rounded-md"
            >
              Home
            </Link>

            <Link
              href="/courses"
              onClick={() => {
                setIsOpen(false);
              }}
              className="block hover:bg-slate-950 px-3 py-2 rounded-md"
            >
              Courses
            </Link>

            <Link
              href="/about"
              onClick={() => {
                setIsOpen(false);
              }}
              className="block hover:bg-slate-950 px-3 py-2 rounded-md"
            >
              About Us
            </Link>

            <Link
              href="/payment"
              target="_blank"
              className="bg-[#8D58FF4D] rounded-[12px] inline-flex items-center p-1.5"
            >
              <Button className="py-3">
                Apply Now <MdArrowForwardIos size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
