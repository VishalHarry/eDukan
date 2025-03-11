import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce Product Customizer",
  description: "Customize your favorite products with different colors, sizes, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >
         <Header/>
        <main className="container h-full w-full ">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
