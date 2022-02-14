const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Mumbai", (error, data) => {
  console.log(error);
  console.log(data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log(error);
  console.log(data);
});
