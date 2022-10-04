import React from "react";
import { CustomButton } from "../../shared/CustomButton";

const About = () => {
  return (
    <>
      <div className="p-2 flex flex-col text-center">
        <h1 className="m-3 text-5xl">About Us</h1>
        <p>Some text about who we are and what we do.</p>{" "}
      </div>
      <hr />
      <h1 className="m-3 text-xl text-center lg:text-4xl">Our Teams</h1>
      <hr />
      <div className="flex justify-center">
        <div className="card rounded-xl w-1/5 m-20 text-center">
          <img
            className="rounded-xl p-2"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <h1>Profile Name</h1>
          <p>Discription</p>
          <p>Email@gmail.com</p>
          <CustomButton variant="outlined" size="small">
            Contact
          </CustomButton>
        </div>
        <div className="card rounded-xl w-1/5 m-20 text-center">
          <img
            className="rounded-xl p-2"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <h1>Profile Name</h1>
          <p>Discription</p>
          <p>Email@gmail.com</p>
          <CustomButton variant="outlined" size="small">
            Contact
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default About;
