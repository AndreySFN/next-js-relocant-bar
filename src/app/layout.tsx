import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import './reset.css'
import './main.css'
import { IWithCildren } from "./types";
const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Релокант - бар с русским акцентом",
  description: "Релокант - бар с русским акцентом",
  icons: ['/favicon.png'],
};

export default function RootLayout({
  children,
}: IWithCildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
