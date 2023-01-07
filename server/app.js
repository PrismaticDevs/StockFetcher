const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-top-movers',
  params: { region: 'US', lang: 'en' },
  headers: {
    'X-RapidAPI-Key': '41cc1d1611msh1534c2dde21493ap123022jsn1922c68d8132',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
};

axios
  .request(options)
  .then(function(response) {
    const topStocks = response.data.finance.result[0].quotes.slice(0, 5);
    console.log(topStocks);
  })
  .catch(function(error) {
    console.error(error);
  });
