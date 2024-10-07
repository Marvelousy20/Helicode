import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QueryProvider } from "@/providers/queryClientProvider";

const inter = Inter({ subsets: ["latin"] });

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
        <QueryProvider>
          <main className="px-5 lg:px-20 bg-[#010115] text-white">
            <Navbar />
            {children}
            <Footer />
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
