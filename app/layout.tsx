import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<link
  rel="stylesheet"
  type="text/css"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
/>

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FolioX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        {/* <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="slick/slick.min.js"></script> */}
        </body>
    </html>
  );
}
