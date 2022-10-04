import InfoIcon from "@mui/icons-material/Info";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PeopleIcon from "@mui/icons-material/People";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

export const navItems = [
  {
    id: 0,
    item: "Home",
    icon: <HomeRoundedIcon />,
    to: "/home",
  },
  {
    id: 1,
    item: "Profile",
    icon: <AccountCircleIcon />,
    to: "/profile",
  },
  {
    id: 2,
    item: "Courses",
    icon: <AutoAwesomeMotionIcon />,
    to: "/courses",
  },
  {
    id: 3,
    item: "Our Services",
    icon: <MiscellaneousServicesIcon />,
    to: "/portfolio",
  },
  {
    id: 4,
    item: "Users",
    icon: <PeopleIcon />,
    to: "/users",
  },
  {
    id: 5,
    item: "About Us",
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
    type: "text",
  },
  {
    id: "category",
    name: "category",
    placeholder: "Cource Category",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    placeholder: "Course Description",
    type: "text",
  },
];

export const profileData1 = [
  {
    defaultValue: "Mani Kant Sharma",
    id: "name",
    name: "name",
    placeholder: "Name",
  },
  {
    defaultValue: "mani@gmail.com",
    id: "email",
    name: "email",
    placeholder: "Email",
  },
];

export const profileData2 = [
  {
    defaultValue: "Lucknow",
    id: "city",
    name: "city",
    placeholder: "City",
  },
  {
    defaultValue: "227105",
    id: "zipcode",
    name: "zipcode",
    placeholder: "Zipcode",
  },
  {
    defaultValue: "India",
    id: "country",
    name: "country",
    placeholder: "Country",
  },
  {
    defaultValue: "1234567890",
    id: "contact",
    name: "contact",
    placeholder: "Contact Number",
  },
];

export const homeData = [
  {
    heading: "Newly Launched",
    start: 0,
    end : 3
  },
  {
    heading: "Mostly Viewed",
    start: 1,
    end : 4
  },
  {
    heading: "Trending Cources",
    start: 3,
    end : 5
    
  },
];
