import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <html lang="en" className="container mx-auto px-40 py-14">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
