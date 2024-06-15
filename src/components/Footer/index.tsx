import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:justify-between py-10">
      <Image src="/logo.svg" alt="logo" width={140} height={32} />

      <div>
        <ul className="flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="">Courses</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-6">
        <a href="https://x.com/Helicodexyz">
          <Image src="/twitter.svg" alt="logo" width={24} height={24} />
        </a>

        <a href="https://discord.gg/hYDpdDCe">
          <Image src="/discord.svg" alt="logo" width={24} height={24} />
        </a>
        <a href="https://t.me/+w8hiLIcuh6dmYTI0">
          <Image src="/telegram.svg" alt="logo" width={24} height={24} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
