import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBorderAll } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const NAV = {
  Links: [
    {
      name: "Home",
      icon: <FiHome />,
      path: "/",
    },
    {
      name: "Products",
      icon: <MdOutlineDashboard />,
      path: "/products",
    },
  ],

  Icons: [
    {
      icon: <FaRegHeart />,
      path: "/whishlist",
    },
    {
      icon: <BsCart3 />,
      path: "/cart",
    },
    {
      icon: <CgProfile />,
      path: "/login",
    },
  ],
};

const USER_DROPDOWN_LINKS = [
  {
    name: "Profile",
    path: "/user/profile",
    icon: <CgProfile />,
  },
  {
    name: "Orders",
    path: "/user/orders",
    icon: <TbBorderAll />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboardCustomize />,
  },
];

export { NAV, USER_DROPDOWN_LINKS };