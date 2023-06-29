const api = {
	key: "9a419ce112c69c8af7c75d2eb28737c0",
	base: "https://api.openweathermap.org/data/2.5/"
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

(() => {
	let now = new Date();
	let dates = document.querySelector('.location .date');
	let day = days[now.getDay()];
	let date = now.getDate();
	let month = months[now.getMonth()];
	let year = now.getFullYear();
	dates.innerText = `${day} ${date} ${month} ${year}`;
})();

async function getResults() {
	const searchbox = document.getElementById('search').value;
	const data = await fetch(`${api.base}weather?q=${(searchbox === '') ? 'Mathura' : searchbox}&appid=${api.key}&units=metric`);
	const weather = await data.json();
	return displayResults(weather);
}

const displayResults = (weather) => {
	let city = document.querySelector('.location .city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;

	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

	let weather_el = document.querySelector('.current .weather');
	weather_el.innerText = weather.weather[0].main;

	let hilow = document.querySelector('.hi-low');
	hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}