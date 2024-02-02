import { Inter } from "next/font/google";
import "./../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Commerce | Trust and Buy",
  description:
    "Next Commerce is a ecommerce web service, which allows customers to purchase your desired products in such a short period of time",
};

export default function RootLayout({ children }) {
  return (
    <div>
     {/* Root Layout Header Here */}
      {children}
    </div>
  );
}

