function ProcessChanceOf(details) {
  // Return [null,null] if there is no percent found
  let percent = /\d+%/g.exec(details);
  let snow = /snow/g.exec(details);
  if (percent) {
    if (snow) {
      return [null, percent[0]];
    } else {
      return [percent[0], null];
    }
  } else {
    return [null, null];
  }
}

function UnpackData(location, data, callback) {
  let {properties:{periods}} = data;
  let forecast = []
  for (let period of periods) {
    let [rain, snow] = ProcessChanceOf(period.detailedForecast);
    let days_weather = {
      day_name: period.name,
      condition: period.shortForecast,
      chance_of_rain: rain,
      chance_of_snow: snow
    }
    if (period.isDaytime === true || period.number === 1) {forecast.push(days_weather)};
  }
  callback(location, forecast);
}

export function PullWeatherData(locations, callback) {
  for (let i = 0; i < locations.length; i++) {
    let location = locations[i];
    let forecast_url = `https://api.weather.gov/points/${location.location.lat},${location.location.lng}/forecast`;
    fetch(forecast_url).then(response => {
      response.json().then(data => UnpackData(location, data, callback));
    }).catch(err => {
      console.log(`Error pulling Weather data for ${location.slug}: ${err}`);
    });
  }
}