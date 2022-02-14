const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=f5fa503f1c9c63a3b69f570aa894f877&query=28.6448,77.2167";

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  //   console.log(data);
  console.log(
    data.current.weather_description[0] +
      ". It is currently " +
      data.current.temperature +
      " degrees out and it feels like " +
      data.current.feelslike +
      " degrees"
  );
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmFsY29uYnJpZGdlIiwiYSI6ImNrem0zZW16MzB3aHgydXRhZncycHh1MjQifQ.Ycros4340_TG8-iBDqY7iA&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const data = response.body;
  const latitude = data.features[0].center[1];
  const longitude = data.features[0].center[0];
  console.log(latitude, longitude);
});
