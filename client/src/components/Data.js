// import React, { useState } from "react";
// import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
const Data = () => {
  // const [data, setData] = useState([{}]);
  try {
    // const fetchData = async () => {
    //   await axios.get("/stocks").then((res) => {
    //     console.log(res.data, 10);
    //     setData(res.data);
    //   });
    // };
    // fetchData();
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <Box>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Data;
