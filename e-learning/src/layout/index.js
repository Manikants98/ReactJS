import React, { useState } from "react";
import classNames from "classnames";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Sidebar from "../shared/Sidebar";

const Layout = ({ component }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Header />
      <div className="flex top-0">
        <Sidebar
          open={open}
          setOpen={setOpen}
          setSelected={setSelected}
          selected={selected}
        />
        <div
          className={classNames(
            "flex-col",
            open ? "w-[100%]" : "w-[100%]"
          )}
        >
          {component}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
