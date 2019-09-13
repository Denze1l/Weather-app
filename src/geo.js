import fetchWeather from './fetchWeather';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

const getGeo = () => {
  const options = {
    maximumAge: 1800000,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

getGeo()
  .then(location => {
    console.log(location);
    fetchWeather(`${location.coords.latitude}, ${location.coords.longitude}`)
  })
  .catch(error => PNotify.alert('Please, type location by yourself!'));

export default getGeo;
