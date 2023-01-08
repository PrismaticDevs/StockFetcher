import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
const Data = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get("/stocks")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data, 12);
      });
  };
  useEffect(() => {
    fetchData();
  });
  fetchData();
  return (
    <>
      <Box>{data}</Box>
    </>
  );
};

export default Data;
