import {
  FaCartPlus,
  FaFacebook,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
  FaUserAlt,
} from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import logo from "./../view/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";

export const companyInfo = {
  title: "Next Ecommerce",
  logo: logo,
  description:
    "Next Ecommerce is a modern ecommerce template built with Tailwind CSS and Next.js by Shariar Hasan",
  address:
    "No. 123, Showdagor Para, Feni Sadar, Feni - 3900, Chittagong, Bangladesh",
  phone: "01234567890",
  copyRightFrom: "2024",
  email: "shahriar.hasan.@gmail.com",
  developer: {
    title: "Shariar Hasan",
    link: "http://github.com/shariar.hasan",
  },
};

export const socialLinks = [
  {
    title: "Facebook",
    link: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    title: "Twitter",
    link: "https://twitter.com",
    icon: <FaSquareXTwitter />,
  },
  {
    title: "Instagram",
    link: "https://instagram.com",
    icon: <FaInstagramSquare />,
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com",
    icon: <FaLinkedin />,
  },
];
export const navRoutes = [
  {
    title: "Home",
    path: "/",
    isDashboardRoute: true,
    isFooterItem: true,
    isNavItem: true,
    icon: <FaHome />,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    isDashboardRoute: true,
    isFooterItem: true,
    isNavItem: true,
    icon: <IoIosSpeedometer />,
  },
  {
    title: "Products",
    path: "/products",
    isDashboardRoute: false,
    isFooterItem: true,
    isNavItem: true,
  },
  {
    title: "Contact",
    path: "/contact",
    isDashboardRoute: false,
    isFooterItem: true,
    isNavItem: true,
  },
  {
    title: "Login",
    path: "/login",
    isDashboardRoute: false,
    isFooterItem: true,
    isNavItem: false,
  },
  {
    title: "Register",
    path: "/register",
    isDashboardRoute: false,
    isFooterItem: true,
    isNavItem: false,
  },
];
export const dashboardRoutes = [
  {
    title: "Order List",
    path: "dashboard/order-list",
    isDashboardRoute: true,
    icon: <FaCartPlus />,
  },
  {
    title: "Product List",
    path: "dashboard/product-list",
    isDashboardRoute: true,
    icon: <LuPackageOpen />,
  },
  {
    title: "User List",
    path: "dashboard/user-list",
    isDashboardRoute: true,
    icon: <FaUserAlt />,
  },
  {
    title: "Add Product",
    path: "dashboard/add-product",
    isDashboardRoute: true,
    icon: <FaCartPlus />,
  },
];
export const BASE_URL = process.env.NEXT_PUBLIC_FETCH_URL;
