
import Navbar from "@/components/layers/Navbar";
import Footer from "@/components/layers/Footer";
import ScrollToTop from "@/components/smallUI/ScrollToTop";


export default function RootLayout({ children }) {
  return (
    <div className="bg-back-gradient">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

