import Vue from "vue";
import App from "./App.vue";
import "babel-polyfill";
import vuetify from './plugins/vuetify'

new Vue({
  el: "#app",
  vuetify,
  render: h => h(App)
});

const apiKey = 'd819007f78204d58d9aa6480cd97279d'
console.log('99999')

/**
@typedef {{
  cityName: string,
  longitude: number,
  latitude: number
}} LocationData

@typedef {{
  temperature: number,
  temperatureFeelsLike: number,
  temperatureMin: number,
  temperatureMax: number,
  pressure: number,
  humidity: number,
  windSpeed: number,
  clouds: number,
}} WeatherData
*/

/**
 * Downloads a URL, converts its response to JSON
 * @param {string} url
 * @returns {object}
 */
async function fetchJSON(url) {
  return (await fetch(url)).json();
}

/**
 * Downloads city location data
 * @param {string} cityName
 * @returns {Promise<LocationData>}
 */
async function fetchLocationData(cityName) {
  const stateCode = "";
  const countryCode = "";
  const limit = 5;

  const data = await fetchJSON(
    `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`
  );

  return {
    cityName: data[0].local_names.ru,
    longitude: data[0].lon,
    latitude: data[0].lat,
  };
}

/**
 * Downloads weather data for given location
 * @param {LocationData} locationData
 * @returns {Promise<WeatherData>}
 */
async function fetchWeatherData(locationData) {
  const data = await fetchJSON(
    `https://api.openweathermap.org/data/2.5/weather`
    + `?lat=${locationData.latitude}`
    + `&lon=${locationData.longitude}`
    + `&appid=${apiKey}`
  );

  return {
    temperature: data.main.temp,
    temperatureFeelsLike: data.main.feels_like,
    temperatureMin: data.main.temp_min,
    temperatureMax: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    clouds: data.clouds.all,
  };
}

// async function

fetchLocationData("Novosibirsk")
  .then((locationData) => {
    return fetchWeatherData(locationData);
  })
  .then((weatherData) => {
    console.log(weatherData);
  })
