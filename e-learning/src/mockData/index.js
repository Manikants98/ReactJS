import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

export const navItems = [
  {
    id: 0,
    item: " Home",
    icon: <HomeIcon />,
    to: "/home",
  },
  {
    id: 1,
    item: "Courses",
    icon: <MiscellaneousServicesIcon />,
    to: "/courses",
  },
  {
    id: 2,
    item: " Portfolio",
    icon: <AutoAwesomeMotionIcon />,
    to: "/portfolio",
  },
  {
    id: 3,
    item: " Contact Us",
    icon: <AlternateEmailIcon />,
    to: "/contact",
  },
  {
    id: 4,
    item: " About Us",
    icon: <InfoIcon />,
    to: "/about",
  },
];

export const registerFormData = [
  {
    id: "name",
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "confirm_password",
    name: "confirm_password",
    label: "Confirm Password",
    type: "password",
  },
];

export const loginFormData = [
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
  },
];

export const courseData = [
  
  {
    id: "heading",
    name: "heading",
    placeholder: "Course Name",
    type: "text"
  },
  {
    id: "category",
    name: "category",
    placeholder: "Cource Category",
    type: "text"
  },
  {
    id: "description",
    name: "description",
    placeholder: "Course Description",
    type: "text"
  },
];
