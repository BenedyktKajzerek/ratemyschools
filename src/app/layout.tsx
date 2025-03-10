import type { Metadata } from "next";
import { Kanit, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { AuthProvider } from "@/context/authContext";

const poppins = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RateMySchools",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${poppins.className} antialiased`}>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}

// <a href="https://storyset.com/web">Web illustrations by Storyset</a>
