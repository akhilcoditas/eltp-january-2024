const apiURL = "https://restcountries.com/v2/all";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
