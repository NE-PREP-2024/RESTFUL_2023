import { FC } from "react";
import { BiChevronUp, BiLogOutCircle } from "react-icons/bi";
import { AiOutlineBarChart, AiOutlineUnorderedList } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import Employee from "@/app/pages/dashboard/employee";

interface RouteWithLayout {
  name: string;
  path: string;
  icon: any;
  element?: JSX.Element;
}

const routes: RouteWithLayout[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: AiOutlineBarChart,
    element: <div>Dashboard Content</div>,
  },
  {
    name: "Employee",
    path: "/dashboard/employee",
    icon: BsPeople,
    element: <Employee />,
  },
  {
    name: "More",
    path: "/dashboard/more",
    icon: AiOutlineUnorderedList,
    element: <div>More Content</div>,
  },
];

interface SidebarProps {
  onRouteChange: (element: JSX.Element | null) => void;
}

const Sidebar: FC<SidebarProps> = ({ onRouteChange }) => {
  const location = useLocation();

  const handleLinkClick = (route: RouteWithLayout) => {
    onRouteChange(route.element || null);
  };

  const isActiveLink = (linkPath: string) => {
    return (
      location.pathname === linkPath || location.pathname.startsWith(linkPath)
    );
  };

  return (
    <div className="bg-white min-w-[230px] h-screen px-4 py-4 flex flex-col">
      <Link to={"/"} className="py-4"></Link>
      {routes.map((route, i) => (
        <Link
          key={i}
          to={route.path}
          className={`${
            isActiveLink(route.path)
              ? "w-full items-center px-4 flex flex-row gap-x-2 rounded-lg bg-[#1B60AC10] text-[#1B60AC] duration-300"
              : "w-full items-center px-4 flex flex-row gap-x-2 text-[#4F4F4F] rounded-lg hover:bg-[#1B60AC10] duration-300 hover:text-[#1B60AC]"
          } py-3 whitespace-nowrap`}
          onClick={() => handleLinkClick(route)}
        >
          <route.icon size={20} />
          <p className="whitespace-nowrap">{route.name}</p>
        </Link>
      ))}
      <button className="flex flex-row text-[#1D5FAD] gap-x-2 py-[30%] justify-center">
        <BiLogOutCircle size={24} />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
