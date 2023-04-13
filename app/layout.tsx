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
        <header className="md:sticky md:top-0 md:z-50 md:container md:mx-auto">
          <Navbar />
        </header>
        <main className="relative md:container md:mx-auto 2xl:px-40 xl:px-24 lg:px-16 px-4 py-14">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
