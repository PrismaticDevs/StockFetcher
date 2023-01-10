import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
const Data = () => {
  const [data, setData] = useState([{}]);
  const fetchData = async () => {
    await axios
      .get("/stocks")
      .then((res) => {
        console.log(res.data, 10);
      })
      .then((data) => {
        setData(data);
        console.log(data, 14);
      });
  };

  useEffect(() => {
    fetchData();
  }, [data]);
  fetchData();
  return (
    <>
      <Box></Box>
    </>
  );
};

export default Data;
