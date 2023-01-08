const axios = require("axios");
const express = require("express");
const app = express();
const port = 8080;

const options = {
  method: "GET",
  url: "https://yh-finance.p.rapidapi.com/stock/v2/get-chart",
  params: { interval: "5m", symbol: "AMRN", range: "1d", region: "US" },
  headers: {
    "X-RapidAPI-Key": "41cc1d1611msh1534c2dde21493ap123022jsn1922c68d8132",
    "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
  },
};

let fianceData;
const getData = async () => {
  await axios
    .request(options)
    .then((response) => {
      console.log(response.data, 22);
      fianceData = response.data;
      console.log(fianceData, 24);
    })
    .catch((error) => {
      console.error(error);
    });
};

app.get("/stocks", async (req, res) => {
  await getData().then(res.status(200).send(fianceData));
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
