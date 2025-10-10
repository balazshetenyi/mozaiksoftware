import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mozaik Software Solutions | Custom Software, Web & App Development",
  description:
    "Professional software, web, and mobile app development services tailored to your business needs.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "custom software",
    "cloud solutions",
  ],
  authors: [{ name: "Mozaik Software Solutions" }],
  openGraph: {
    title: "Mozaik Software Solutions | Custom Software, Web & App Development",
    description:
      "Professional software, web, and mobile app development services tailored to your business needs.",
    siteName: "Mozaik Software Solutions",
    type: "website",
    url: "https://mozaiksoftware.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mozaik Software Solutions",
      },
    ],
  },
  metadataBase: new URL("https://mozaiksoftware.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body className={`${inter.variable} font-sans antialiased`}>
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
