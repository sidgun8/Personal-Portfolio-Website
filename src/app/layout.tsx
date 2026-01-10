import { ThemeProvider } from "@/components/ThemeProvider";
import ToasterClient from "@/components/ui/ToasterClient";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Chat } from "./Chat";
import "./globals.css";

const urbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth Srinivasan - Chemical Engineer",
  description: "I am Siddharth(you can call me Sid), your friendly neighborhood engineer with a knack for turning caffeine, operations, tech and systems into pure magic. A builder at heart, I thrive on creating solutions that make life easier and more efficient. I am always open to collaborate and connect with like minded people so feel free to reach out to me on any of my social media links below.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanistSans.variable} antialiased min-h-screen h-full flex flex-col justify-between items-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full w-full relative">
            <Header />
            <div className="w-full mt-20">
              {children}

              <ToasterClient />
            </div>
          </div>
          <Image alt="talktoai" src={"/images/talktoai.png"} width={400} height={400} className="w-24 h-fit hidden md:block md:fixed bottom-12 right-6"/>
          <Chat />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}