export const ScoreMap = [
  {letter: "A", numeral: 5},
  {letter: "B", numeral: 4},
  {letter: "C", numeral: 3},
  {letter: "D", numeral: 2},
  {letter: "F", numeral: 1},
];

const DayMods = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 3,
  Sunday: 3,
}

const WeatherMods = {
  rain: 4,
  snow: 5,
  nice: -2
}

const DateMods = {
  last_day_of_month: 5
}

const LastDayOfMonth = {
  "31": ["01", "03", "05", "07", "08", "10", "12"],
  "30": ["04", "06", "09", "11"],
  "28": ["02"]
}

const WeekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

function GetDayMod(weather) {
  let score =  DayMods[weather.day_name];
  if (score === undefined) {
    let date = new Date();
    score = DayMods[WeekDay[date.getDay()]];
  }
  return score;
}

function GetWeatherMod(weather){
  if (weather.chance_of_snow !== null) {
    return WeatherMods.snow;
  } else if (weather.chance_of_rain !== null) {
    return WeatherMods.rain;
  } else if (weather.temperature > 60 && weather.temperature < 90){
    return WeatherMods.nice;
  } else {
    return 0;
  }
}

export function isLastDayOfMonth(date) {
  let [month, day] = date.split('-');
  if (LastDayOfMonth[day]){
    return LastDayOfMonth[day].includes[month];
  }
  return false;
}

export function NumericalGrade(letter) {
  let score = ScoreMap.find(s => s.letter === letter)
  return score === undefined ? 1 : score.numeral
}

export function LetterGrade(number) {
  let score = ScoreMap.find(s => s.numeral === number)
  return score === undefined ? "F" : score.letter
}

export function CalculateGrade(weather) {
  let weight = GetDayMod(weather);
  weight += isLastDayOfMonth(weather.date) ? DateMods.last_day_of_month : 0;
  weight += GetWeatherMod(weather);
  let score = 0;
  switch (true) {
    case(weight >= 9 && weight <= 15):
      score = 5;
      break;
    case(weight >= 7 && weight <= 8):
      score = 4;
      break;
    case(weight >= 4 && weight <= 6):
      score = 3;
      break;
    case(weight >= 1 && weight <= 3):
      score = 2;
      break;
    case(weight >= -1 && weight <= 0):
      score = 1;
      break;
    default:
      break;
  }
  return score;
}
