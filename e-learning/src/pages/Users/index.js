import React from "react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { users } from "../../services/Users";
import { CustomButton } from "../../shared/CustomButton";
import { Loader } from "../../shared/Loader";

const Users = () => {
  const { isLoading, mutate, data } = useMutation(users);
  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-center text-2xl font-bold m-5">Registered Users</h1>
          <hr />
          <div className="justify-center text-center lg:grid-cols-4 md:grid-cols-2 p-6 grid lg:gap-5">
            {data &&
              data.data &&
              data.data.map((item) => {
                return (
                  <>
                    <div className="card flex flex-col items-center rounded m-2 p-2 justify-center ">
                      <img
                        className="rounded-full w-9/12 border "
                        src="https://firebasestorage.googleapis.com/v0/b/testing-mkx.appspot.com/o/Screenshot.png?alt=media&token=6d6a99db-28ca-45ec-b03a-18e1e4b1cf26"
                        alt=""
                      />
                      <h1>Name : {item.name} </h1>
                      <h1>Email : {item.email} </h1>
                      <CustomButton>Contact</CustomButton>
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
