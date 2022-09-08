import React, { useState } from "react";
import classNames from "classnames";
import Button from "@mui/material/Button";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-row w-full">
      <div
        className={classNames("bg-lime-600  h-72", open ? "w-1/4" : "w-1/10")}
      >
        <Button
          onClick={() => setOpen(!open)}
          variant="contained"
          className="!bg-red-600 !text-amber-400 !rounded-xl"
        >
          {open ? "Close" : "Open"}
        </Button>
      </div>
      <div
        className={classNames(
          "bg-yellow-100  h-72",
          open ? "w-3/4" : "w-[90%]"
        )}
      >
        Helo
      </div>
    </div>
  );
};
