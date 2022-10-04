import classNames from "classnames";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { navItems } from "../../mockData";
import { Link } from "react-router-dom";

const Sidebar = ({ open, setOpen, setSelected }) => {
  return (
    <div className="flex">
      <div
        className={classNames(
          "flex flex-col shadow-gray-400 shadow-card",
          open ? "w-40" : "w-[45px]"
        )}
      >
        {navItems.map((item) => (
          <Link
            className={classNames(
              "flex p-2 border-b-2 cursor-pointer",
              window.location.pathname === item.to
                ? "bg-primary shadow-card text-white"
                : "bg-white text-primary"
            )}
            key={item.id}
            onClick={() => {
              setSelected(item.id);
            }}
            to={item.to}
          >
            {item.icon}
            {open && <span className="ml-2"> {item.item} </span>}
          </Link>
        ))}
        <button
          onClick={() => setOpen(!open)}
          className="flex text-primary p-2.5 "
        >
          {open ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
