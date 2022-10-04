import React from "react";
import { Avatar } from "@mui/material";
import { ProfileTextField } from "../../shared/CustomTextField";
import { profileData1 } from "../../mockData";
import { profileData2 } from "../../mockData";

const Profile = () => {
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <>
      <div className="flex flex-col m-6 p-5 shadow-primary rounded-xl shadow-card text-xl justify-center  mx-auto w-3/5 ">
        <div className="grid grid-cols-2 m-5 items-center">
          <div className="justify-self-center">
            <Avatar
              alt="Remy Sharp"
              className="!w-48 !h-48"
              src="/static/images/avatar/1.jpg"
            >
              <span className="!text-8xl !text-primary">M</span>
            </Avatar>
            <p className="text-primary text-xs text-center">Add Image</p>
          </div>
          <div className="justify-self-start flex flex-col">
            {profileData1.map((data) => (
              <ProfileTextField
                placeholder={data.placeholder}
                name={data.name}
                id={data.id}
                defaultValue={data.defaultValue}
              />
            ))}
            {/* <FormControl variant="standard">
              <Select value={age} onChange={handleChange}>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
            </FormControl> */}
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 m-5 items-center">
          <div className="justify-self-center flex flex-col">
            {profileData2.map((data) => (
              <ProfileTextField
                placeholder={data.placeholder}
                name={data.name}
                id={data.id}
                defaultValue={data.defaultValue}
              />
            ))}
          </div>

          <div className="">
            <p>Area of Interest</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
