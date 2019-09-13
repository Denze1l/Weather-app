import template from './template.hbs';
import refs from './refs';

const fetchWeather = query => {
  const defUrl = 'http://api.weatherstack.com/current?';
  // let apiDate = 'current?';
  const key = '4c39bd17e66ec339312161198de9b4c7';

  fetch(defUrl + `access_key=` + key + `&query=${query}`)
    .then(response => response.json())
    .then(data => {
      const renderHtml = template(data);
      console.log(data);
      refs.seaction.innerHTML = '';
      refs.seaction.insertAdjacentHTML('afterbegin', renderHtml);
    })
    .catch(error => console.log(error));
};

//http://api.weatherstack.com/current?access_key=4c39bd17e66ec339312161198de9b4c7&query=New%20York

export default fetchWeather;
