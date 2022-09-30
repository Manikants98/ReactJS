import React from "react";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div className="flex p-10 items-center justify-center ">
        <div className= "flex w-1/2 flex-col rounded border-2 items-center ">
          <h1 className="text-3xl p-5">CONTACT US</h1>
          <input className="m-2 border-2 w-1/2 rounded p-1" type="text" placeholder="Name" />
          <input className="m-2 border-2 w-1/2 rounded p-1" type="text" placeholder="Email" />
          <textarea className="m-2 border-2 w-1/2 rounded p-1" type="text" placeholder="Message" />
          <Button
              variant="outlined"
              className="!m-2 !capitalize shadow !border-gray-200 !border-2 !text-black"
              size="small"
            >
              Contact
            </Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
