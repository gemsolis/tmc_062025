import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "TMC CCTV and Structured Cabling",
  description:
    "Professional CCTV installation and structured cabling solutions for homes and businesses. Secure your space with TMC’s reliable and efficient services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[100%]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
