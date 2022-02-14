const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=f5fa503f1c9c63a3b69f570aa894f877&query=28.6448,77.2167";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
