
import Navbar from "@/components/layers/Navbar";
import Footer from "@/components/layers/Footer";


export default function RootLayout({ children }) {
  return (
    <div >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

