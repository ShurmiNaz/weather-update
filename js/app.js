const API_KEY = `9342d57a23f7be7283f719b80dd1a286`;

const searchTemperature = () => {
     const city = document.getElementById('city-name').value;
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
     document.getElementById(id).innerText = text;
}
const displayTemperature = temparature => {
     console.log(temparature)
     setInnerText('city', temparature.name);
     setInnerText('temp', temparature.main.temp);
     setInnerText('condition', temparature.weather[0].main);
     // set weather Icon
     const url = ` http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
     const imageIcon = document.getElementById('weather-image-icon').setAttribute('src', url);
}