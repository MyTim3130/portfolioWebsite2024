import { Oswald } from "next/font/google";
import "./globals.css";

const inter = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Tim Hausl-Kramper || Portfolio",
  description: "Portfolio of Tim Hausl-Kramper, a full-stack developer, photographer, and Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
