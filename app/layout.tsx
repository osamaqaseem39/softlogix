import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SoftLogix - Tax Consultancy, General Trading & Packaging Solutions",
  description: "Professional tax consultancy, general trading, and marketing management services. Specializing in packaging materials, aseptic packaging paper, and juices in PET bottles. Located in Dubai, UAE.",
  keywords: "tax consultancy, general trading, marketing management, packaging materials, aseptic packaging paper, PET bottles, juices, Dubai, UAE, DSO-IFZA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} font-sans antialiased bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
