import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="pt-5">
      <nav className="flex justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={140} height={32} />

        <div>
          <ul className="flex items-center gap-12">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Explore Courses</Link>
            </li>
            <li>
              <Button className="flex items-center gap-3">
                Apply Now <MdArrowForwardIos size={16} />
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
