import { Button } from "@mui/material";
import classNames from "classnames";
export const CustomButton = ({
  children,
  className = "",
  size = "small",
  variant = "outlined",
  type = "submit",
  disabled = false,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      className={classNames(
        "!m-2 !capitalize ",
        !disabled && "!bg-primary  !text-white",
        className
      )}
      size={size}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
