import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrderContextProvider } from "@/context/newOrderContext";
import Dashboard from "@/components/dashboard";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <OrderContextProvider>
          {children}
        </OrderContextProvider>
      </body>
    </html>
  );
}
