const axios = require("axios");
const express = require("express");
const app = express();
const port = 8080;

const options = {
  method: "GET",
  url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers",
  params: { region: "US", lang: "en-US", start: "0", count: "6" },
  headers: {
    "X-RapidAPI-Key": "41cc1d1611msh1534c2dde21493ap123022jsn1922c68d8132",
    "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  },
};

let fianceData;
const getData = async () => {
  await axios
    .request(options)
    .then((response) => {
      console.log(response.data, 22);
      fianceData = response.data;
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
