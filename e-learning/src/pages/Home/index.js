import React from "react";
import { getCourseFn } from "../../services/GetCourses";
import { useQuery } from "react-query";
import { Loader } from "../../shared/Loader";
import { CustomButton } from "../../shared/CustomButton";
import { homeData } from "../../mockData";

const Home = () => {
  const { isLoading, data } = useQuery(["getCourse"], () => getCourseFn());
  return (
    <>
      <div className="text-center m-10">
        <h1 className="text-3xl lg:text-8xl">Welcome To eduVilla</h1>
        <p className="text-xs lg:text-base">
          This is the Website thats provides latest technical Courses, Quizs.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 p-4 ">
        {homeData.map((home) => {
          return (
            <>
              {isLoading ? (
                <Loader />
              ) : (
                <div className="rounded-xl m-2 bg-white">
                  <h1 className="text-bold text-center lg:text-left m-2 text-xl lg:text-3xl">
                    {home.heading}
                  </h1>
                  <hr />
                  <div className="grid lg:gap-10 lg:grid-cols-4">
                    {data.data.slice(home.start, home.end).map((item) => {
                      return (
                        <>
                          <div className="m-2 lg:m-5 text-center bg-white rounded-xl overflow-hidden card relative w-72 h-96">
                            <img
                              className="w-full h-48 object-cover"
                              src={item.image_url}
                              alt=""
                            />
                            <div className="flex flex-col w-full py-4 absolute bottom-0">
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
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
