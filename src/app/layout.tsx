import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import AppProvider from "@/provider/AppProvider";

const vazirmatn = Vazirmatn({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
