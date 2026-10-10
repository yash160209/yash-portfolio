import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Makwana | Developer & Creative Technologist",
  description:
    "Yash Makwana is an EXTC diploma student building modern websites and interactive technology projects.",
  openGraph: {
    title: "Yash Makwana | Developer & Creative Technologist",
    description: "Turning ideas into working digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
