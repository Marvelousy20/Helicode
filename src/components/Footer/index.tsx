import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col gap-8 md:justify-between py-10 border-t border-[#242424] mt-10 md:mt-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-y-10">
        <div>
          <Image src="/logo.svg" alt="logo" width={140} height={32} />
          {/* <p className="text-[#AEB0AF] text-base mt-4 max-w-[397px]">
          Training the next billion Africans in advanced tech skills.
        </p> */}
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-[4.6rem]">
          <div>
            <ul className="flex flex-col gap-4 text-[#D4E8FF]">
              <li className="text-[#D4E8FF80]">School</li>
              <li className="font-medium">
                <Link href="/">School of Design</Link>
              </li>
              <li>
                <Link href="/">School of Development</Link>
              </li>
              <li>
                <Link href="">School of Engineering</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4 text-[#D4E8FF]">
              <li className="text-[#D4E8FF80]">Company</li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="">Contact us</Link>
              </li>
              <li>
                <Link href="">Help Desk</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4 text-[#D4E8FF]">
              <li className="text-[#D4E8FF80]">Resources</li>
              <li>
                <Link href="/">Courses</Link>
              </li>
              <li>
                <Link href="">Contact us</Link>
              </li>
              <li>
                <Link href="">Our Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4 text-[#D4E8FF]">
              <li className="text-[#D4E8FF80]">Policies</li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#252525]" />

      <div className="flex items-center justify-between gap-6">
        <div className="text-[#D4E8FF80] text-[13px]">
          2024 © All rights reserved Helicode
        </div>

        <div className="flex items-center space-x-6">
          <div className="text-[13px] text-[#D4E8FF80]">Join our socials</div>
          <div>
            <a
              href="https://x.com/Helicodexyz"
              className="flex items-center gap-2.5"
            >
              {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
              <Image src="/Twitter.svg" alt="logo" width={20} height={20} />
              {/* </span> */}
              {/* <p className="text-[#A0A4A0] font-medium">Twitter</p> */}
            </a>
          </div>

          <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/helicodeacademy?igsh=YWxxbWc3NGxmdDhv"
              className="flex items-center gap-2.5"
            >
              {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
              <Image src="/Instagram.svg" alt="logo" width={20} height={20} />
              {/* </span> */}
              {/* <p className="text-[#A0A4A0] font-medium">Instagram</p> */}
            </a>
          </div>

          <div className="h-4 w-[1px] bg-[#D4E8FF14]"></div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/company/helicode/"
              className="flex items-center gap-2.5"
            >
              {/* <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center"> */}
              <Image src="/Discord.svg" alt="logo" width={20} height={20} />
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
