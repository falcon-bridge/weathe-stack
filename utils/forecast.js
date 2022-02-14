const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f5fa503f1c9c63a3b69f570aa894f877&query=${latitude},${longitude}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const data = response.body;
      callback(
        undefined,
        data.current.weather_descriptions[0] +
          ". It is currently " +
          data.current.temperature +
          " degrees out and it feels like " +
          data.current.feelslike +
          " degrees"
      );
    }
  });
};

module.exports = forecast;
