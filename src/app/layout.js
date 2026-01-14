import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import MicrosoftClarity from "@/components/metrics/MicrosoftClarity";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  maximumScale: 1, // Prevent zoom on mobile inputs for app-like feel
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <GoogleTagManager gtmId="GTM-N9WX626M" />
      <GoogleAnalytics gaId="G-RVLG9FXZV1" />
      <MicrosoftClarity />
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Header />
        <main className="pt-20 pb-24 lg:pb-0">
          {children}
        </main>
        <MobileBottomNav />
        <div className="hidden lg:block">
          {/* Footer only on desktop/tablet, or simplify it for mobile later */}
          <Footer />
        </div>
        <div className="lg:hidden pb-24">
             <Footer />
        </div>
        <ToastContainer theme="dark" />
      </body>
    </html>
  );
}
