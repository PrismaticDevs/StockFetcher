const axios = require("axios");
const express = require("express");
const app = express();
const port = 8080;

const options = {
  method: "GET",
  url: "https://yh-finance.p.rapidapi.com/market/v2/get-movers",
  params: { region: "US", lang: "en-US", count: "6", start: "0" },
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
      for (let i = 0; i < fianceData.length; i++) {
        const element = fianceData[i];
        console.log(element.chart, 25);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

app.get("/stocks", async (req, res) => {
  await getData();
  fianceData = res.json(fianceData);
  console.log("hi");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
