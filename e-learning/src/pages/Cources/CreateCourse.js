import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { courseSchema } from "../../schemas";
import { CreateCourseTextField } from "../../shared/CustomTextField";
import { courseData } from "../../mockData";
import { useMutation } from "react-query";
import { createCourseFn } from "../../services/CreateCourse";
import { Loader } from "../../shared/Loader";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { CustomButton } from "../../shared/CustomButton";
const initialValues = {
  heading: "",
  category: "",
  description: "",
  image_url: "",
};

const CreateCourse = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const handleOpen = () => {
    setOpen(true);
    setImage(null);
  };
  const handleClose = () => setOpen(false);
  const client = useQueryClient();
  const { isLoading, mutate } = useMutation(createCourseFn, {
    onSuccess: () => {
      navigate("/courses");
      handleClose();
      client.refetchQueries("getCourse");
    },
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const img = e.target.files[0];
    const imageRef = ref(storage, `images/${img.name}`);
    uploadBytes(imageRef, img).then((gallery) => {
      getDownloadURL(gallery.ref).then((url) => {
        setImage(url);
        console.log(url);
      });
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: courseSchema,

    onSubmit: (values, action) => {
      const reqBody = {
        image_url: image,
        heading: values.heading,
        category: values.category,
        description: values.description,
      };
      if (image) mutate(reqBody);
      action.resetForm();
    },
  });

  return isLoading ? (
    <Loader show={isLoading} />
  ) : (
    <>
      <div className="border-b-2 justify-between w-full content-between ">
        <CustomButton onClick={handleOpen}>Create Course</CustomButton>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="absolute justify-center top-1/2 left-1/2 p-5 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white ">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col bg-white space items-center text-center"
            >
              <h1 className="text-3xl p-2 text-center">Create Course</h1>
              <hr className="w-full" />
              {image ? (
                <>
                  <img
                    src={image}
                    alt=" "
                    className="w-1/2 h-24 object-contain mb-3"
                  />
                  <p
                    className="cursor-pointer text-xs text-red-500"
                    onClick={() => setImage(null)}
                  >
                    Remove Image
                  </p>
                </>
              ) : (
                <Button
                  variant="outlined"
                  className="!m-2 !capitalize w-1/2 !border-primary !py-3 !border-dashed !text-primary"
                  component="label"
                >
                  Upload Image
                  <input
                    hidden
                    onChange={handleChange}
                    value={formik.image_url}
                    formik={formik}
                    name="image_url"
                    id="image_url"
                    accept="image/*"
                    type="file"
                  />
                </Button>
              )}

              {courseData.map((data) => (
                <CreateCourseTextField
                  placeholder={data.placeholder}
                  type={data.type}
                  name={data.name}
                  id={data.id}
                  formik={formik}
                />
              ))}

              <CustomButton
                variant="outlined"
                size="small"
                type="submit"
                className="w-1/2 !m-4"
              >
                Create Coursce
              </CustomButton>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CreateCourse;
