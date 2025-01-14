import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ee = "";

const DmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm_sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={DmSans.variable}>
      <head>
        <link rel="icon" href="icon.png" />
      </head>
      <body className=" bg-[#070815] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
