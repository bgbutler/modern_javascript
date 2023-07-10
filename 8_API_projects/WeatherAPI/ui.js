// create UI


class  UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    // icon is from wunderground
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    let mainTemp
    let tempFeels
    let iconCode
    let wxIcon

    this.location.textContent = weather.name + ', ' + weather.sys.country;
    this.desc.textContent = weather.weather[0].main + ', ' +weather.weather[0].description;

    iconCode = weather.weather[0].icon
    wxIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";
    this.icon.setAttribute('src', wxIcon);

    // get the temp convert from string to float to kelvin
    mainTemp = ((weather.main.temp - 273) * 1.8 + 32).toFixed(1);
    this.string.textContent = String(mainTemp) + ' F';

    //this.string.textContent = weather.main.temp;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;


    //tempfeels = ((Number(weather.main.feels_like) - 273) * 1.8 + 32).toFixed(1);
    tempFeels = weather.main.feels_like;
    tempFeels = (((tempFeels - 273) * 1.8) + 32).toFixed(1);
    //console.log(typeof tempFeels)

    this.feelslike.textContent = `Feels Like: ${String(tempFeels)} F`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.wind.textContent = `Wind: ${weather.wind.speed} From ${weather.wind.deg} deg`;
  }
}
