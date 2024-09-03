import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 md:justify-between py-10 border-t border-[#242424] mt-10 md:mt-20">
      <div>
        <Image src="/logo.svg" alt="logo" width={140} height={32} />
        <p className="text-[#AEB0AF] text-base mt-4 max-w-[397px]">
          Training the next billion Africans in advanced tech skills.
        </p>
      </div>

      <div className="flex md:flex-row gap-[11.18rem]">
        <div>
          <ul className="flex flex-col gap-4 text-[#AEB0AF]">
            <li className="font-medium text-white">
              <Link href="/">About us</Link>
            </li>
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

        <div className="flex flex-col gap-6">
          <div>
            <a
              href="https://x.com/Helicodexyz"
              className="flex items-center gap-2.5"
            >
              <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center">
                <Image src="/twitter.svg" alt="logo" width={16} height={16} />
              </span>
              <p className="text-[#A0A4A0] font-medium">Twitter</p>
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://t.me/+w8hiLIcuh6dmYTI0"
              className="flex items-center gap-2.5"
            >
              <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center">
                <Image src="/telegram.svg" alt="logo" width={16} height={16} />
              </span>
              <p className="text-[#A0A4A0] font-medium">Telegram</p>
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/company/helicode/"
              className="flex items-center gap-2.5"
            >
              <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center">
                <Image src="/linkedin.svg" alt="logo" width={16} height={16} />
              </span>
              <p className="text-[#A0A4A0] font-medium">LinkedIn</p>
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/helicodeacademy?igsh=YWxxbWc3NGxmdDhv"
              className="flex items-center gap-2.5"
            >
              <span className="h-9 w-9 bg-[#8D58FF1A] rounded-[8px] flex items-center justify-center">
                <Image src="/instagram.svg" alt="logo" width={16} height={16} />
              </span>
              <p className="text-[#A0A4A0] font-medium">Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
