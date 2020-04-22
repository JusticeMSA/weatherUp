// These are all the elements that will be manipulated in the app
const form = document.querySelector("form");
const searchString = document.querySelector("#search");
const cuurentCity = document.querySelector(".city h2");
const currentDateTime = document.querySelector(".date-time");
const currentWeather = document.querySelector(".weather");
const currentIcon = document.querySelector(".icon");

const upcomingIcons = Array.from(document.querySelectorAll(".upcoming-icon"));
const upcomingWeather = Array.from(document.querySelectorAll(".upcoming-weather"));
