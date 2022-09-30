import React from "react";
import { Button } from "@mui/material";
import Users from '../../shared/Users'

const About = () => {
  return (
    <>
      <div className="p-2 flex-col text-center">
        <h1 className="m-3 text-5xl">About Us</h1>
        <p>Some text about who we are and what we do.</p>
        <p className="pr-16 p-5 pl-16">
          Resize the browser window to see that this page is responsive by the
          way. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          corrupti praesentium velit, excepturi repudiandae ab et quaerat quam
          ducimus ad temporibus provident unde cupiditate id doloremque pariatur
          non rem aliquid. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Facere corrupti praesentium velit, excepturi repudiandae ab et
          quaerat quam ducimus ad temporibus provident unde cupiditate id
          doloremque pariatur non rem aliquid. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facere corrupti praesentium velit,
          excepturi repudiandae ab et quaerat quam ducimus ad temporibus
          provident unde cupiditate id doloremque pariatur non rem aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          corrupti praesentium velit, excepturi repudiandae ab et quaerat quam
          ducimus ad temporibus provident unde cupiditate id doloremque pariatur
          non rem aliquid. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Facere corrupti praesentium velit, excepturi repudiandae ab et
          quaerat quam ducimus ad temporibus provident unde cupiditate id
          doloremque pariatur non rem aliquid. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facere corrupti praesentium velit,
          excepturi repudiandae ab et quaerat quam ducimus ad temporibus
          provident unde cupiditate id doloremque pariatur non rem aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          corrupti praesentium velit, excepturi repudiandae ab et quaerat quam
          ducimus ad temporibus provident unde cupiditate id doloremque pariatur
          non rem aliquid. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Facere corrupti praesentium velit, excepturi repudiandae ab et
          quaerat quam ducimus ad temporibus provident unde cupiditate id
          doloremque pariatur non rem aliquid. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facere corrupti praesentium velit,
          excepturi repudiandae ab et quaerat quam ducimus ad temporibus
          provident unde cupiditate id doloremque pariatur non rem aliquid.
        </p>
        <hr />
        <h1 className="m-3 text-sm lg:text-4xl">Our Teams</h1>
        <div className="justify-center p-10 grid lg:grid-cols-5 gap-3 md:grid-cols-3">
          <div className="border-2 justify-center w-48 p-3 rounded">
            <img
              className="rounded"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <h1>Profile Name</h1>
            <p>Discription</p>
            <p>Email@gmail.com</p>
            <Button
              variant="outlined"
              className="!m-2 !capitalize shadow !border-gray-200 !border-2 !text-black"
              size="small"
            >
              Contact
            </Button>
          </div>
          <div className="border-2 justify-center w-48 p-3 rounded">
            <img
              className="rounded"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <h1>Profile Name</h1>
            <p>Discription</p>
            <p>Email@gmail.com</p>
            <Button
              variant="outlined"
              className="!m-2 !capitalize shadow !border-gray-200 !border-2 !text-black"
              size="small"
            >
              Contact
            </Button>
          </div>
          <div className="border-2 justify-center w-48 p-3 rounded">
            <img
              className=" rounded"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <h1>Profile Name</h1>
            <p>Discription</p>
            <p>Email@gmail.com</p>
            <Button
              variant="outlined"
              className="!m-2 !capitalize shadow !border-gray-200 !border-2 !text-black"
              size="small"
            >
              Contact
            </Button>
          </div>
          <div className="border-2 justify-center w-48 p-3 rounded">
            <img
              className=" rounded"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <h1>Profile Name</h1>
            <p>Discription</p>
            <p>Email@gmail.com</p>
            <Button
              variant="outlined"
              className="!m-2 !capitalize shadow !border-gray-200 !border-2 !text-black"
              size="small"
            >
              Contact
            </Button>
          </div>
          <div className="border-2 justify-center w-48 p-3 rounded">
            <img
              className=" rounded"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
            <h1>Profile Name</h1>
            <p>Discription</p>
            <p>Email@gmail.com</p>
            <Button
              variant="outlined"
              className="!m-2 !capitalize shadow !border-gray-200 !border-2 !text-black"
              size="small"
            >
              Contact
            </Button>
          </div>
        </div>
        <Users/>
      </div>
    </>
  );
};

export default About;
