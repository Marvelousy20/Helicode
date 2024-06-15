"use client";
import { useState } from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { Button } from "../ui/button";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="pt-5">
      <nav className="flex justify-between items-center relative">
        <Image src="/logo.svg" alt="logo" width={140} height={32} />

        <div className="block md:hidden">
          <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-12">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Explore Courses</Link>
            </li>
            <li>
              <Button className="flex items-center gap-3">
                <a
                  href="https://tally.so/r/mZd1Za"
                  className="flex items-center"
                >
                  Apply Now <MdArrowForwardIos size={16} className="ml-3" />
                </a>
              </Button>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="block md:hidden absolute top-full w-full bg-white text-black p-4 right-0 left-0 text-start">
            <ul className="flex flex-col gap-12">
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">Explore Courses</Link>
              </li>
              <li>
                <Button className="gap-3">
                  <a
                    href="https://tally.so/r/mZd1Za"
                    className="flex items-center"
                  >
                    Apply Now <MdArrowForwardIos size={16} className="ml-3" />
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
