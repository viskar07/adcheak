import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:'InstaDL',
  description: "InstaDL is an online web tool that helps you download Instagram Videos, Photos, Reels, and IGTV. InstaDL is designed to be easy to use on any device, such as a mobile phone, tablet, or computer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange 
        />
        {children}

      </body>
    </html>
  );
}
