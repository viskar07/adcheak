import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default:'Y3mate',
    template:'%s  - Y3mate'
  },
  description: "Y3mate allows you to convert & download video from YouTube, Facebook, Video, Dailymotion, Youku, etc. to Mp3, Mp4 in HD quality. Y2mate supports downloading all video formats such as: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily download for free thousands of videos from YouTube and other websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="google-adsense-account" content="ca-pub-2415595862323011" /></head>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange 
        />
        <Navbar />
        {children}

      </body>
    </html>
  );
}
