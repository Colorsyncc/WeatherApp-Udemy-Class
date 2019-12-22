const location = "Buenos aires,ar";
const api_key = "42f366b8fbee32ea0f88c60289c4c7fb";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

