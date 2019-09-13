import './styles.css';
import getGeo from './geo';
import template from './template.hbs';
import refs from './refs';
import fetchWeather from './fetchWeather'




const handelSubmit=(event)=>{
  event.preventDefault();
  console.log(event.currentTarget.elements.city.value);
  const qwery = event.currentTarget.elements.city.value
  fetchWeather(qwery)
}



refs.form.addEventListener('submit', handelSubmit )
// const refs = {
  //   form: document.querySelector('#form'),
// };

// weather.then(data => {
//   console.log(data);
// });
