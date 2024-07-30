const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = "8c4f2391b1a2df434b460629591dc956";

weatherForm.addEventListener('submit', async event => {
	event.preventDefault();
	const city = cityInput.value;
	if (city) {
		try {
			const weatherData = await getWeatherData(city);
			displayWeatherInfo(weatherData);
		}
		catch (error) {

			displayError(error);
		}
	}
	else {
		displayError("Please enter a city");
	}
})

async function getWeatherData(city) {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

	const response = await fetch(apiUrl);
	if (!response.ok) {
		throw new Error("Could not fetch weather data");
	}

	return await response.json();

}

function displayWeatherInfo(data) {
	const { 
		name: city,
		main: { temp, humidity },
		weather: [{ description, id }]} = data;
	card.textContent = "";
	card.style.display = "flex";
	console.log(data);
	const cityDisplay = document.createElement("h1");
	const tempDisplay = document.createElement("p");
	const humidityDisplay = document.createElement("p");
	const descDisplay = document.createElement("p");
	const weatherEmoji = document.createElement("p");
	
	cityDisplay.textContent = city;
	tempDisplay.textContent = `${temp - 273.15}`;
	humidityDisplay.textContent = `Humidity: ${humidity}`;
	descDisplay.textContent = description;
	weatherEmoji.textContent = getWeatherEmoji(id);
	cityDisplay.classList.add('cityDisplay');
	
	card.appendChild(cityDisplay)
	card.appendChild(tempDisplay)
	card.appendChild(humidityDisplay)
	card.appendChild(descDisplay)
	card.appendChild(weatherEmoji)
}

function getWeatherEmoji(weatherId) {
	switch (true) {
		case (weatherId >= 200 && weatherId < 300): 
			return "1";
		case (weatherId >= 300 && weatherId < 400):
			return "2";
		case (weatherId >= 500 && weatherId < 600):
			return "3";
		case (weatherId >= 600 && weatherId < 700):
			return "4";
		case (weatherId >= 700 && weatherId < 800):
			return "5";
		case (weatherId === 800):
			return "6";
		case (weatherId >= 801 && weatherId < 810):
			return "7";
		default:
			return "?";
	}
}

function displayError(message) {
	const errorDisplay = document.createElement("p");
	errorDisplay.textContent = message;
	errorDisplay.classList.add("errorDisplay");
	card.textContent = ""
	card.style.display = "flex";
	card.appendChild(errorDisplay); 
}