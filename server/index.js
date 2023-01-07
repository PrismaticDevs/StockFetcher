const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
  params: {q: 'tesla', region: 'US'},
  headers: {
    'X-RapidAPI-Key': '41cc1d1611msh1534c2dde21493ap123022jsn1922c68d8132',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});