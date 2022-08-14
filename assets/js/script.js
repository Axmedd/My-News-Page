const latestButton = document.getElementById("latest-btn");
const sportsButton = document.getElementById("sports-btn");
const covidButton = document.getElementById("covid-cases-btn");
const pageContent = document.getElementById("page-content");
const sportsSection = document.getElementById("sports-section");
const latestSection = document.getElementById("latest-section");
const covidSection = document.getElementById("covid-section");
const latestHeadlines = document.getElementById("headlines");
const latestLinks = document.getElementById("links");

latestButton.addEventListener("click", openLatestPage);

function openLatestPage() {
  console.log("Latest Page Opened");
  latestButton.classList.add.hidden;
  pageContent.classList.remove("hide");
  latestButton.remove();
  sportsButton.remove();
  covidButton.remove();
  sportsSection.remove();
}

sportsButton.addEventListener("click", openSportPage);

function openSportPage() {
  console.log("Sport Page Opened");
  latestButton.classList.add.hidden;
  pageContent.classList.remove("hide");
  latestButton.remove();
  sportsButton.remove();
  covidButton.remove();
  latestSection.remove();
}

covidButton.addEventListener("click", openCovidPage);

function openCovidPage() {
  console.log("Covid Page Opened");
  latestButton.classList.add.hidden;
  pageContent.classList.remove("hide");
  latestButton.remove();
  sportsButton.remove();
  covidButton.remove();
  latestSection.remove();
  sportsSection.remove();
}

// fetchButton.addEventListener("click", getApi);
function handleNewsApi() {
  let firstApiUrl =
    "http://api.mediastack.com/v1/news?access_key=774d6825387c91706870d36a208f2f53&date=2022-08-08&countries=gb";

  fetch(firstApiUrl)
    .then((response) => response.json())
    .then((firstApiData) => handleNewsApiData(firstApiData));

  function handleNewsApiData(firstApiData) {
    //console.log(firstApiData.data);
    for (var i = 0; i < 5; i++) {
      //create a html tag
      //append text content
      console.log(firstApiData.data[i].title);

      if (firstApiData.data[i].category === "sports") {
        handleSportsData(firstApiData.data[i]);
      } else {
        handleNewsData(firstApiData.data[i]);
      }
    }
  }
}

function handleNewsData(newsData) {
  console.log(newsData);
  h2ForLatest = document.createElement("h2");
  h2ForLatest.textContent = newsData.title;
  latestHeadlines.appendChild(h2ForLatest);
}

handleNewsData();

function handleSportsData(sportsData) {}
//console.log(data[i].description);

secondApiUrl =
  "https://api.covid19api.com/total/country/united-kingdom/status/confirmed?from=2022-03-01T00:00:00Z&to=2022-08-01T00:00:00Z";
fetch(secondApiUrl)
  .then((response) => response.json())
  .then((secondApiData) => console.log(secondApiData));

handleNewsApi();
