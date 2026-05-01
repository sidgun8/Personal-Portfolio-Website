import { ThemeProvider } from "@/components/ThemeProvider";
import ToasterClient from "@/components/ui/ToasterClient";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

const urbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddharth Srinivasan - Industrial AI, Optimization and Infra",
  description:
    "Siddharth Srinivasan builds Industrial AI and optimization systems with a rapid-prototyping FDE approach using ASPEN Plus, DWSIM, Python, AWS, and Palantir Foundry.",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}