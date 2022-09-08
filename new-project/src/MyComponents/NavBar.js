import React from "react";

import Sidebar2 from "./Sidebar2";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    {
      item: "MK STUDIO",
      redirectTo: "/",
    },
  ];
  return (
    <>
     <div className="flex fixed top-0 flex-col h-full w-full">
        <div className=" flex bg-sky-300 border-b h-14 border-sky-500">
          {navItems.map((item) => (
            <Link
              className="flex text-3xl sticky items-center p-2 font-bold"
              to={item.redirectTo}
              key="1"
            >
              {item.item}
            </Link>
          ))}
          <input
            className="block m-3 rounded-xl sticky  pl-5 outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            type="text"
            placeholder="Search"
          />
        </div>
        <Sidebar2/>
      </div>
    </>
  );
};
export default NavBar;
