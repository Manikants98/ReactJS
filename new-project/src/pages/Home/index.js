import Sidebar2 from "../../MyComponents/Sidebar2";
import React, { useState } from "react";
import classNames from "classnames";
import About from "../../MyComponents/About";
import Contact from "../../MyComponents/Contact";
import OurServices from "../../MyComponents/OurServices";
import SignUp from "../../MyComponents/SignUp";
import Portfolio from "../../MyComponents/Portfolio";

export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="w-full bg-lime-800">Header</div>
      <div className="flex w-full">
        <Sidebar2 open={open} setOpen={setOpen} setSelected={setSelected} selected={selected}/>
        <div
          className={classNames(
            "flex flex-col  ",
            open ? "w-[90%]" : "w-[97%]"
          )}
        >
          {selected === 0 && <OurServices />}
          {selected === 1 && <Portfolio />}
          {selected === 2 && <About />}
          {selected === 3 && <Contact />}
          {selected === 4 && <SignUp />}
        </div>
      </div>
    </div>
  );
};
