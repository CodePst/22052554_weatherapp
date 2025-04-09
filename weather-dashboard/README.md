🌦️ Weather Dashboard

A sleek, responsive, and interactive weather web application built using React.js, powered by the OpenWeatherMap API. This project features live weather data, theme toggling, recent search history, smooth animations, and a modern UI.

🚀 Live Demo

[Click here to view the live site](https://22052554-weatherapp-idv9.vercel.app/)


🌟 Features:

- 🔍 Search by City
- 🌌 Live Weather Updates
- ⬆️ Refresh Button
- 🌚 Dark/Light Theme Toggle
- ⏳ Loader Animation While Fetching
- 🕒 Recent Search History (Last 5 Cities)
- 🌐 Responsive Layout
- ✨ Modern UI with Minimal CSS Effects


🛠️ Tech Stack Used:

- Frontend: React.js, CSS
- API: [OpenWeatherMap](https://openweathermap.org/)
- Animations: CSS Transitions
- HTTP Client: Axios


📁 Project Setup:

1. Clone the repository
bash-
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

2. Install dependencies
bash-
npm install

3. Add your OpenWeatherMap API key
Create a `.env` file in the root directory:
env-
REACT_APP_WEATHER_API_KEY=your_api_key_here

Update your code to use:
js-
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

4. Start the app
bash-
npm start

🌐 API Integration Details
OpenWeatherMap API
Base URL: https://api.openweathermap.org/data/2.5/weather

HTTP Method: GET

🔧 Required Parameters:
City name (e.g., London)

appid: Your API key

units: Set to metric for temperature in Celsius (optional)

🔗 Example API Request:
bash-
Copy
Edit
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

🔐 API Key & Rate Limits
Sign up at https://openweathermap.org/api to get your free API key.

Free tier rate limit: 60 requests per minute.

Store the API key in a .env file and load it using process.env.REACT_APP_WEATHER_API_KEY.


🏠 Folder Structure:
src/
├── components/
│   ├── Loader.jsx
│   ├── SearchBar.jsx
│   ├── SearchHistory.jsx
│   ├── ThemeToggle.jsx
│   ├── WeatherCard.jsx
│   └── WeatherDashboard.jsx
├── App.jsx
├── index.css
└── index.js

