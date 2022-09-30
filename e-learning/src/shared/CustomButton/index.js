import { Button } from "@mui/material";
import classNames from "classnames";
export const CustomButton = ({
  children,
  classOverride = "",
  size = "small",
  variant = "outlined",
}) => {
  return (
    <Button
      variant={variant}
      className={classNames(
        "!m-2 !capitalize !bg-primary !text-white",
        classOverride
      )}
      size={size}
    >
      {children}
    </Button>
  );
};
