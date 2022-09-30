import React from "react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { users } from "../../services/Users";
import { Loader } from "../Loader";

const Users = () => {
  const { isLoading, mutate, data } = useMutation(users);

  useEffect(() => {
    mutate();
  }, []);
  console.log(data);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1> Registered Users</h1>
          <div className="grid grid-cols-5 gap-2">
            {data &&
              data.data &&
              data.data.map((item) => {
                return (
                  <>
                    <div className=" flex flex-col items-center rounded border-violet-200 border-2 m-2 p-2 justify-center ">
                      <img
                        className="rounded-full w-9/12 border "
                        src="https://firebasestorage.googleapis.com/v0/b/testing-mkx.appspot.com/o/Screenshot.png?alt=media&token=6d6a99db-28ca-45ec-b03a-18e1e4b1cf26"
                        alt=""
                      />
                      <h1>Name : {item.name} </h1>
                      <h1>Email : {item.email} </h1>
                    </div>
                  </>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Users;
