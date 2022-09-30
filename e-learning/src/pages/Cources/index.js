import React, { useEffect } from "react";
import CreateCourse from "./CreateCourse";
import Button from "@mui/material/Button";
import { getCourseFn } from "../../services/GetCourses";
import { useQuery } from "react-query";
import { Loader } from "../../shared/Loader";
import { CustomButton } from "../../shared/CustomButton";
const Courses = () => {
  const { isLoading, data } = useQuery(["getCourse"], () => getCourseFn());

  return (
    <>
      <CreateCourse />

      <div className="justify-center text-center p-10 grid grid-cols-5 gap-3">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data &&
              data.data &&
              data.data.map((item) => {
                return (
                  <>
                    <div className="justify-center w-48 p-3 rounded shadow-md">
                      <img src={item.image_url} alt="Thumbnail" />
                      <div className="h-1/2">
                      <h1>Course Name : {item.heading}</h1>
                      <hr className="m-1" />
                      <h1>Category : {item.category}</h1>
                      <hr className="m-1" />
                      <h1>Description : {item.description}</h1>
                      <CustomButton>Start Course</CustomButton>
                      </div>
                   
                    </div>
                  </>
                );
              })}
          </>
        )}
      </div>
    </>
  );
};

export default Courses;
