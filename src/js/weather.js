const API_KEY = '05f72eba23873b957d188afee472c729'

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => {
    response.json().then(data => {
      const city = document.querySelector('#weather span:first-child')
      const weatherSpan = document.querySelector('#weather span:last-child')

      weatherSpan.innerText = ` ${data.weather[0].main} / ${parseFloat(
        data.main.temp
      )} `
      city.innerText = `${data.name} / `
    })
  })
}
function onGeoError() {
  alert("can't find you, No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
