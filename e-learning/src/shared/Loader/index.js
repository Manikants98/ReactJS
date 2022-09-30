import { Backdrop, CircularProgress } from "@mui/material";

export const Loader = (show) => {
  return (
    <Backdrop className="!text-white z-50" open={show}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
