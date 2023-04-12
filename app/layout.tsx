import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Source_Sans_Pro } from "next/font/google";

const ptsans = Source_Sans_Pro({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ryan Spencer",
  description: "Developer portfolio created by Ryan Spencer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ptsans.className}>
        <header className="sticky top-0 z-50 container mx-auto">
          <Navbar />
        </header>
        <main className="relative container mx-auto px-40 py-14">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
