import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../CustomButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row justify-between p-2 items-center sticky shadow-card bg-white top-0 z-50">
        <Link
          className="flex text-2xl lg:text-4xl items-center text-primary pr-2  font-bold"
          to="/home"
        >
          eduVilla
        </Link>
        <div className="flex items-center">
          <input
            className="outline-primary p-1 lg:w-64 w-40 border-blue-300 border-2 hover:border-secondary rounded-full pl-3"
            type="text"
            placeholder="Search"
            size="small"
          />

          <CustomButton
            className="!rounded-full !text-xs !lg:w-64 !w-24 !border-2 !border-primary !p-2"
            onClick={() => navigate("/register")}
          >
            Register/Login
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default Header;
