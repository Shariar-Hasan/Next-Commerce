import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import logo from "./../view/logo.png"
import { FaSquareXTwitter } from "react-icons/fa6";
export const navRoutes = [
  {
    name: "Home",
    path: "/",
    isFooterItem: true,
    isNavItem: true,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    isFooterItem: true,
    isNavItem: true,
  },
  {
    name: "Products",
    path: "/products",
    isFooterItem: true,
    isNavItem: true,
  },
  {
    name: "Contact",
    path: "/contact",
    isFooterItem: true,
    isNavItem: true,
  },
  {
    name: "Login",
    path: "/login",
    isFooterItem: true,
    isNavItem: false,
  },
  {
    name: "Register",
    path: "/register",
    isFooterItem: true,
    isNavItem: false,
  },
];

export const companyInfo = {
  name: "Next Ecommerce",
  logo: logo,
  description:
    "Next Ecommerce is a modern ecommerce template built with Tailwind CSS and Next.js by Shariar Hasan",
  address:
    "No. 123, Showdagor Para, Feni Sadar, Feni - 3900, Chittagong, Bangladesh",
  phone: "01234567890",
  copyRightFrom: "2024",
  email: "shahriar.hasan.@gmail.com",
  developer: {
    name: "Shariar Hasan",
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
