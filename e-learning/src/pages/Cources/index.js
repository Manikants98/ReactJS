import React from "react";
import { getCourseFn } from "../../services/GetCourses";
import { useQuery } from "react-query";
import { Loader } from "../../shared/Loader";
import { CustomButton } from "../../shared/CustomButton";
import { useNavigate } from "react-router-dom";
const Courses = () => {
  const { isLoading, data } = useQuery(["getCourse"], () => getCourseFn());
  const navigate = useNavigate();

  
  return (
    <>
      <div className="justify-center text-center lg:grid-cols-4 md:grid-cols-2 p-6 grid lg:gap-10">
        <div className="flex m-2 lg:m-5 text-primary bg-white shadow justify-center w-72 items-center rounded-xl border-dashed border-primary border-2 h-96">
          <p
            className="cursor-pointer"
            onClick={() => navigate("/create-course")}
          >
            Add Course
          </p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data &&
              data.data &&
              data.data.map((item) => {
                return (
                  <>
                    <div className="m-2 lg:m-5 bg-white rounded-xl overflow-hidden card relative w-72 h-96">
                      <img
                        className="w-full h-48 object-cover"
                        src={item.image_url}
                        alt=""
                      />
                      <div className=" flex flex-col w-full  py-4 absolute bottom-0">
                        <h1 className="font-bold text-md mb-2">
                          {item.heading}
                        </h1>
                        <hr className="m-1" />
                        <h1 className=" text-md mb-2">{item.category}</h1>
                        <hr className="m-1" />
                        <p className="text-gray-700 text-sm">
                          {item.description.length > 20
                            ? item.description.slice(0, 20) + "..."
                            : item.description}
                        </p>
                        <CustomButton className="!w-2/3 !mt-3 !mx-auto">
                          Start Course
                        </CustomButton>
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
