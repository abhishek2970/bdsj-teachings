import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "BDSJ Teaching’s",
  description: "Learn Smart. Learn Global. With BDSJ Teaching’s.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
