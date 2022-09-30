import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Register from "../../components/Register";
import { Button, TextField } from "@mui/material";
import LogIn from "../../components/LogIn";
import classNames from "classnames";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between items-center sticky bg-white top-0 shadow-theme-border shadow-sm z-50">
        <Link
          className="flex text-sm sm:text-3xl sticky items-center  text-primary p-2 font-bold"
          to="/home"
        >
          edu-tech-villa
        </Link>
        <div className="flex items-baseline">
          <TextField
            className="!rounded-full"
            type="text"
            placeholder=" Search"
            size="small"
          />

          <div className="flex justify-center items-center content-center flex-row">
            <Button
              className="!m-3 !bg-primary !pr-5 !rounded-full !capitalize"
              variant="contained"
              onClick={handleOpen}
            >
              Register/Login
            </Button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="absolute top-1/2 left-1/2 shadow-md -translate-x-1/2 -translate-y-1/2 w-1/2 outline-none ">
              <div className="flex flex-row bg-white space text-center">
                <h1
                  className={classNames(
                    "cursor-pointer h-full p-3 text-2xl w-full",
                    !signIn && "bg-gray-200"
                  )}
                  onClick={() => setSignIn(false)}
                >
                  Register
                </h1>
                <h1
                  className={classNames(
                    "cursor-pointer text-2xl p-3 h-full w-full",
                    signIn && "bg-gray-200 "
                  )}
                  onClick={() => setSignIn(true)}
                >
                  LogIn
                </h1>
              </div>
              {signIn ? <LogIn /> : <Register setSignIn={setSignIn} />}
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header;
