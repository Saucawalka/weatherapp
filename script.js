
const display =async () => {
  let areaName = document.getElementById('area').value
let key = '8ba889de9e6bae8596e5b7f6f66de92c'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${areaName}&appid=${key}&units=metric`
 fetch(url)
 .then(response => response.json())
 .then(data=>{
  console.log(data);
  pener.innerHTML=`
  <p class="text-center fs-2 fw-bold">${ data.name}</p>
  <p class=" text-center fs-1 fw-medium "> ${ data.main.temp} <suP> o</suP>C </p>
  <p class="text-center fw-bold fs-4 ">${ data.weather[0].description} </p>
   <div class="d-flex gap-5 ms-3 fw-medium fs-5 "><p> Lat: ${ data.coord.lat}</p>
   <p> Lon: ${data.coord.lon}</p>
  <p> H: ${ data.main.humidity}% </p></div>
  `
  area.value=''
 })
 .catch(error=>{
  console.log('Error fetching  weather data',error);
 })
}
