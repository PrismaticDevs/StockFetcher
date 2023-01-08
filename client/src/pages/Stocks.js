import React from "react";
import Data from "../components/Data";
import { Typography, Box } from "@mui/material";

const Stocks = () => {
  return (
    <>
      <Box>
        <Typography sx={{ textAlign: "center" }} variant="h2">
          Stocks
        </Typography>
        {Data()}
      </Box>
    </>
  );
};

export default Stocks;
