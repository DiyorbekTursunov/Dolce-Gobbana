//types
import type { Metadata } from "next";
//styles
import { DM_Sans } from "next/font/google";
import "./globals.css";
//components
import Navbar from "@/components/ui_elements/navbar";
import Footer from "@/components/ui_elements/footer";
const DmSans = DM_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "NETVIA",
  description: "You can buy tickets for something , 'Ecommers app'",
  creator: "Diyorbek Tursunov"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DmSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
