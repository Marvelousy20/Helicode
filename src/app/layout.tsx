import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/lib/providers";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
import EmailCaptureModal from "@/components/EmailCaptureModal";

export const metadata: Metadata = {
  title: "School made for the future",
  description:
    "Helicode is committed to preparing every Web3 explorer for their adventure in the crypto world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="px-5 lg:px-20 bg-[#010115] text-white">
            <Navbar />
            <EmailCaptureModal />
            {children}
            <Toaster position="top-right" reverseOrder={false} />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
