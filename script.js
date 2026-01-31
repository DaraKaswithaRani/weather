 async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const API_KEY = '26860fd27e71a4c3e631020ecf4a6c64'; // Replace with your real API key

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (data.cod === 200) {
    const weather = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;
    document.getElementById('weatherResult').innerHTML = weather;
  } else {
    document.getElementById('weatherResult').innerHTML = "<p>City not found!</p>";
  }
}