
const api_key = '46ad7457603b9b0104e633e78cd60e16';

function handleClick(){
      const city = document.getElementById("city-name").value;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

      fetch(url)
      .then(res => res.json())
      .then(data => displayTemperature(data))
}

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}


const displayTemperature = weatherData =>{
      setInnerText('city',weatherData.name);
      setInnerText('temperature',weatherData.main.temp);
      setInnerText('condition',weatherData.weather[0].main);
}