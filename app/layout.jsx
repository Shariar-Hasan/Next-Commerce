import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next Commerce | Trust and Buy",
    description:
        "Next Commerce is a ecommerce web service, which allows customers to purchase your desired products in such a short period of time",
};

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="text-site">
                    <ReduxProvider>
                        {children}
                    </ReduxProvider>
                </div>

            </body>
        </html>

    )
}

export default MainLayout