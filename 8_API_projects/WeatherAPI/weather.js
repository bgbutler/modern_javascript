class Weather {
  constructor(city, state, country) {
    this.apiKey = 'd94644cd6deef402ae504818f316d7ce';
    this.city = city;
    this.state = state;
    this.country = country
  }
  // fetch weather from API
  async getWeather(){
    const response = await fetch
    (`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }
  // Change weather Location
  changeLocation(city, state, country){
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
