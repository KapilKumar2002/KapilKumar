import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/header/Header";
import Footer from "@/layouts/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kapil Kumar Portfolio",
  description:
    "My portfolio that includes everything related to my software engineer journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + "h-screen w-full  flex flex-col gap-4 font-serif"
        }
      >
        <Header />
        <div className="md:pl-20 xl:pl-[200px] px-2 duration-700">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
