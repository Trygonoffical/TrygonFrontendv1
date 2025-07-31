import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Trygon - Leading IT Solutions & Web Development Company",
  description: "Professional IT services including web development, mobile apps, e-commerce, digital marketing, DevOps, and UI/UX design. Transform your business with our expert solutions.",
  keywords: "IT services, web development, mobile app development, digital marketing, DevOps, cloud services, UI UX design, software consulting",
  authors: [{ name: "Trygon" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
