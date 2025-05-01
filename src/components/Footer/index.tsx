import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col gap-24 md:justify-between px-4 py-14 border-[#242424] mt-10 md:mt-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between gap-y-10">
        <div>
          <Image src="/logo.svg" alt="logo" width={130} height={32} />
          {/* <p className="text-[#AEB0AF] text-base mt-4 max-w-[397px]">
          Training the next billion Africans in advanced tech skills.
        </p> */}
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-[4.6rem]">
          <div>
            <ul className="flex flex-col gap-4 text-[#D4E8FF]">
              <li className="text-[#D4E8FF80]">Featured Courses</li>
              <li className="font-medium">
                <Link href="/blockchain-cybersecurity">
                  Blockchain Cybersecurity
                </Link>
              </li>
              {/* <li>
                <Link href="/">Smart Contract Development</Link>
              </li> */}
              {/* <li>
                <Link href="/">Web3 Product Design</Link>
              </li> */}
              <li>
                <Link href="/technical-writing">Web3 Technical Writing</Link>
              </li>
              <li>
                <Link href="/marketing">Web3 Marketing</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4 text-[#D4E8FF]">
              <li className="text-[#D4E8FF80]">Company</li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4 text-[#D4E8FF]">
              <li className="text-[#D4E8FF80]">Resources</li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              {/* <li>
                <Link href="/">FAQ</Link>
              </li> */}
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4 text-[#D4E8FF]">
              <li className="text-[#D4E8FF80]">Policies</li>
              <li>
                <Link href="/terms&condition">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <hr className="border-t border-[#252525]" /> */}

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[#D4E8FF80] text-[13px]">
          2024 © All rights reserved Helicode
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="text-[13px] text-[#D4E8FF80]">Join our socials</div>
          <div>
            <a
              href="https://x.com/Helicodexyz"
              className="flex items-center gap-2.5"
            >
              {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
              <Image src="/twitter.svg" alt="logo" width={20} height={20} />
              {/* </span> */}
              {/* <p className="text-[#A0A4A0] font-medium">Twitter</p> */}
            </a>
          </div>

          <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/helicodehq"
              className="flex items-center gap-2.5"
            >
              {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
              <Image src="/instagram.svg" alt="logo" width={20} height={20} />
              {/* </span> */}
              {/* <p className="text-[#A0A4A0] font-medium">Instagram</p> */}
            </a>
          </div>

          <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://discord.gg/PHzk33M8W8"
              className="flex items-center gap-2.5"
            >
              {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
              <Image src="/discord.svg" alt="logo" width={20} height={20} />
              {/* </span> */}
              {/* <p className="text-[#A0A4A0] font-medium">LinkedIn</p> */}
            </a>
          </div>

          <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://t.me/+w8hiLIcuh6dmYTI0"
              className="flex items-center gap-2.5"
            >
              {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
              <Image src="/telegram.svg" alt="logo" width={24} height={24} />
              {/* </span> */}
              {/* <p className="text-[#A0A4A0] font-medium">Telegram</p> */}
            </a>
          </div>

          <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/company/helicode/"
              className="flex items-center gap-2.5"
            >
              {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
              <Image src="/linkedin.svg" alt="logo" width={24} height={24} />
              {/* </span> */}
              {/* <p className="text-[#A0A4A0] font-medium">LinkedIn</p> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
