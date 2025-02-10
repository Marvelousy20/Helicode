import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/lib/providers";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
// import EmailCaptureModal from "@/components/EmailCaptureModal";
import Script from "next/script";

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
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '906902701550243');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=906902701550243&ev=PageView&noscript=1" />`,
          }}
        />
        <Providers>
          <main className="bg-[#010115] text-white">
            <Navbar />
            {/* <EmailCaptureModal /> */}
            {children}
            <Toaster position="top-right" reverseOrder={false} />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
