const searchBar = document.getElementById("search-bar");
const searchResultsTable = document.getElementById("search-results-table");
const searchResultsBody = document.getElementById("search-results");

const citiesUrl =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(citiesUrl)
  .then((blob) => blob.json())
  .then((json) => cities.push(...json));

searchBar.addEventListener("keyup", () => {
  searchResultsBody.innerHTML = null;

  const searchQuery = searchBar.value;
  if (!searchQuery) {
    return;
  }

  const searchRegex = new RegExp(searchQuery, "gi");

  const searchResults = cities.filter(
    (c) => c.city.match(searchRegex) || c.state.match(searchRegex)
  );

  searchResults.forEach((result) => {
    const row = searchResultsBody.insertRow(0);
    const cell1 = row.insertCell(0);

    const cityHighlighted = result.city.replace(
      searchRegex,
      '<span class="matching-portion">$&</span>'
    );
    const stateHighlighted = result.state.replace(
      searchRegex,
      '<span class="matching-portion">$&</span>'
    );
    const populationFormatted = result.population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    cell1.innerHTML = `<span class="name-and-state">${cityHighlighted}, ${stateHighlighted}</span> <span class="population">population ${populationFormatted}</span>`;
  });
});

console.log(cities);
