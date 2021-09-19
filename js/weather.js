const MY_APIKEY = "28602a2c9bbfa6719c7ce0a822d7e758";
const temp = document.querySelector("#weather span:nth-child(2)");
function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_APIKEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      temp.innerText = data.main.temp + " °C";
      weather.innerText = data.weather[0].main;
      city.innerText = `${data.sys.country} / ${data.name}`;
      console.log(data);
    });
} //다음강의에서 설명
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
//위치좌표 전달(성공, 에러)
//날씨 API openweathermap
