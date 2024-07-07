const searchBar = document.getElementById("search-bar");
const resultsTable = document.getElementById("search-results");

const citiesUrl =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(citiesUrl)
  .then((blob) => blob.json())
  .then((json) => cities.push(...json));

searchBar.addEventListener("keyup", () => {
  resultsTable.innerHTML = null;

  const searchQuery = searchBar.value;
  if (!searchQuery) {
    return;
  }

  const searchResults = cities.filter(
    (c) =>
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  searchResults.forEach((result) => {
    const row = resultsTable.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = result.city;
    cell2.innerHTML = result.state;
    cell3.innerHTML = result.population;
  });
});

console.log(cities);
