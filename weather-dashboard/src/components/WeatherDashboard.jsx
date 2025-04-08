import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import SearchHistory from './SearchHistory';
import ThemeToggle from './ThemeToggle';
import Loader from './Loader';
import axios from 'axios';

const API_KEY = 'f7d833435e1022ef5b481933126ec3f8';

function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const updateHistory = (cityName) => {
    setHistory((prev) => {
      const updated = [cityName, ...prev.filter((c) => c !== cityName)];
      return updated.slice(0, 5);
    });
  };

  const fetchWeather = async (customCity) => {
    const cityToSearch = customCity || city;
    if (!cityToSearch.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
      setCity(cityToSearch);
      updateHistory(res.data.name);
    } catch (err) {
      setError('City not found. Please check the name and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleHistorySelect = (selectedCity) => {
    fetchWeather(selectedCity);
  };

  return (
    <div className={`weather-dashboard ${isDark ? 'dark' : ''}`}>
      <h1>Weather Dashboard</h1>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <SearchHistory history={history} onSelect={handleHistorySelect} />
      {weather && (
        <button onClick={() => fetchWeather(city)} className="refresh-btn">
          🔄 Refresh
        </button>
      )}
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default WeatherDashboard;
