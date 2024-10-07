"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MdArrowForwardIos } from "react-icons/md";

const courses = [
  { id: 1, href: "zero-knowledge-proofs", name: "Zero Knowledge Proofs" },
  { id: 2, href: "blockchain-cybersecurity", name: "Blockchain Cybersecurity" },
  { id: 3, href: "product-design", name: "Web3 Product Design" },
  { id: 4, href: "smart-contract-auditing", name: "Smart Contract Auditing" },
  { id: 5, href: "marketing", name: "Web3 Marketing" },
  { id: 6, href: "technical-writing", name: "Web3 Technical Writing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileCourses, setShowMobileCourses] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileCourses = () => {
    setShowMobileCourses(!showMobileCourses);
  };

  return (
    <nav className="bgblack text-white pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              <Image src="/logo.svg" alt="logo" width={140} height={32} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:bg-slate-900 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={toggleDropdown}
                  className="hover:bg-slate-900 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1focus:ring-offset-gray-800 focus:ring-slate-900 inline-flex items-center"
                >
                  Explore Courses
                  {showDropdown ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                {showDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-30 bg-[#0A081B] min-w-max border border-[#3B00BA33] left-0 mt-2 w-48 rounded-md shadow-lgring-1 ring-black ring-opacity-5"
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {courses.map((course) => (
                        <Link
                          key={course.id}
                          href={course.href}
                          className="block px-4 py2 py-4 text-[0.9rem] text-white hover:bg-slate-900"
                          role="menuitem"
                          onClick={() => setShowDropdown(false)}
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              href="https://tally.so/r/mZd1Za"
              className="flex items-center"
            >
              <Button className="flex items-center gap-3">
                Apply Now <MdArrowForwardIos size={16} className="" />
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
              className="block hover:bg-slate-950 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <div>
              <button
                onClick={toggleMobileCourses}
                className="w-full text-left hover:bg-slate-950 px-3 py-2 rounded-md flex justify-between items-center"
              >
                <span>Explore Courses</span>
                {showMobileCourses ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {showMobileCourses && (
                <div className="pl-4 mt-2 space-y-2">
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      href={course.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-950"
                      onClick={() => {
                        setIsOpen(false);
                        setShowMobileCourses(false);
                      }}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="block hover:bg-slate-950 px-3 py-2 rounded-md"
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
