// initialize storage class
const storage = new Storage();

// get stored location responseData
const weatherLocation = storage.getLocationData();



// initialize weather object

const weather = new Weather(weatherLocation.city, weatherLocation.state, weatherLocation.country);

//Init UI
const ui = new UI();

// get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);

// change location addEventListener
document.getElementById('w-change-btn').addEventListener('click', (e) =>
{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, state, country);

  // save to local Storage
  storage.setLocationData(city, state, country);

  // call get weather to refresh display
  getWeather();


  // close Modal
  $('#locModal').modal('hide');

});

//weather.changeLocation('London', 'uk', 'GB')

function getWeather(){
  weather.getWeather()
  // this is a promise since asynch
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
