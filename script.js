/*const userTab=document.querySelector(["data-userWeather"]);
const searchTab=document.querySelector(["data-searchWeather"]);
const userContainer=document.querySelector(".weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector(["data-searchForm"]);
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// variable ko initialise kar diya...
// oldTab: Initializes the variable to keep track of the currently active tab, starting with userTab.
// API_KEY: Stores the API key for accessing weather data (likely from a weather API).
// oldTab.classList.add("current-tab"); Adds a CSS class (current-tab) to highlight the initially active tab.
// getfromSessionStorage(): Calls a function (likely defined elsewhere) that retrieves data from the session storage. 
//This could be the user's location coordinates saved from a previous session.
 let currentTab = userTab;
const API_KEY="d6675f5576241ab9925308f478afb1a6";
currentTab.classList.add("current-tab");
getfromSessionStorage();

// Purpose: The switchTab function handles the logic for switching between the "User Weather" and "Search Weather" tabs.
// Parameter (newTab): The tab that the user clicked on
// First, it checks if the user is switching to a different tab. If so,
// it removes the current-tab class from the old tab and adds it to the new tab.
//If the user is switching to the "Search Weather" tab, 
//the function hides the user weather info and location access prompts, then displays the search form.
//If the user is switching to the "User Weather" tab, 
//it hides the search form and attempts to fetch and display weather data using the stored coordinates.

function switchTab(newTab){
  if(newTab!=oldTab){
    oldTab.classList.remove("current-tab");
    oldTab=newTab;
    oldTab.classList.add("current-tab");

    if(!searchForm.classList.contain("active")){
        //kay search form wala class invisible hai if yes make it visible
        searchForm.classList.add("active");
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
    }
    
    else {
        //main pehle search wale tab pr tha, ab your weather tab visible karna h 
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
        //for coordinates, if we haved saved them there.
        getfromSessionStorage();
    }
  }
}


userTab.addEventListener("click",()=>{
    //pass clicked tab as input paramenter
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
    switchTab(searchTab);
});

function getfromSessionStorage(){
    const  localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
}
else{
    const coordinates = JSON.parse(localCoordinates);
    //now that we have the coordinates, let's fetch the weather data
    fetchUserWeatherInfo(coordinates);
}
}

asyn function fetchUserWeatherInfo(coordinates){
    //fetch weather data from API using the coordinates
    const{lat,lon}=coordinates;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
        const  data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        loadingScreen.classList.remove("active");
        // Handle the error (HW = Homework)
        console.error("Failed to fetch weather data", err);
        // You can display an error message to the user, like:
        alert("Failed to fetch weather data. Please try again later.");
    }

}
function renderWeatherInfo(weatherInfo) {
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    console.log(weatherInfo);

    //fetch values from weatherINfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}
    */
