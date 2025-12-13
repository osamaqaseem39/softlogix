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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://softlogix.com'),
  title: "SoftLogix - Tax Consultancy, General Trading & Packaging Solutions",
  description: "Professional tax consultancy, general trading, and marketing management services. Specializing in packaging materials, aseptic packaging paper, and juices in PET bottles. Located in Dubai, UAE.",
  keywords: "tax consultancy, general trading, marketing management, packaging materials, aseptic packaging paper, PET bottles, juices, Dubai, UAE, DSO-IFZA",
  openGraph: {
    title: "SoftLogix - Tax Consultancy, General Trading & Packaging Solutions",
    description: "Professional tax consultancy, general trading, and marketing management services. Specializing in packaging materials, aseptic packaging paper, and juices in PET bottles.",
    url: "https://softlogix.com",
    siteName: "SoftLogix",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "SoftLogix - Tax Consultancy, General Trading & Packaging Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftLogix - Tax Consultancy, General Trading & Packaging Solutions",
    description: "Professional tax consultancy, general trading, and marketing management services. Specializing in packaging materials, aseptic packaging paper, and juices in PET bottles.",
    images: ["/images/logo.png"],
  },
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
