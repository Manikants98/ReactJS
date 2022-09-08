import classNames from "classnames";
import React, { useState } from "react";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar2 = ({ open, setOpen, setSelected, selected }) => {
  const navItems = [
    {
      id: 0,
      item: open ? " Services" : "",
      redirectTo: "/ourservices",
      icon: <MiscellaneousServicesIcon />,
    },
    {
      id: 1,
      item: open ? " Portfolio" : "",
      redirectTo: "/portfolio",
      icon: <AutoAwesomeMotionIcon />,
    },
    {
      id: 2,
      item: open ? " About Us" : "",
      redirectTo: "/about",
      icon: <InfoIcon />,
    },
    {
      id: 3,
      item: open ? " Contact Us" : "",
      redirectTo: "/contact",
      icon: <AlternateEmailIcon />,
    },
    {
      id: 4,
      item: open ? " Register" : "",
      redirectTo: "/login",
      icon: <AccountCircleIcon />,
    },
  ];
  return (
    <div className="flex">
      <div
        className={classNames(
          " flex flex-col  border h-screen",
          open ? "w-40" : "w-12"
        )}
      >
        {navItems.map((item) => (
          <div
            className={classNames(
              "flex p-2 border-b border-sky-500 cursor-pointer",
              selected === item.id ? "bg-stone-500" : "bg-white"
            )}
            // to={""}
            key={item.key}
            onClick={() => setSelected(item.id)}
          >
            {item.icon}
            <span className="ml-2"> {item.item} </span>
          </div>
        ))}
        <button onClick={() => setOpen(!open)} className="flex p-2.5 ">
          {open ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar2;
