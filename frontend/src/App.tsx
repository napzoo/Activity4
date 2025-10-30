import { useState } from 'react';
import './App.css';
import axios from 'axios';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  description: string;
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    
    setLoading(true);
    setError('');
    setWeather(null);
    
    try {
      const response = await axios.get('http://localhost:3000/weather', {
        params: { city: city.trim() }
      });
      setWeather(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🌤️ Weather Proxy API</h1>
        <p className="subtitle">Enter a city name to get current weather</p>
        
        <form onSubmit={fetchWeather}>
          <input
            type="text"
            placeholder="Enter city name (e.g., Manila)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={loading}
          />
          <button type="submit" disabled={loading || !city.trim()}>
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </form>

        {error && <div className="error">❌ {error}</div>}

        {weather && (
          <div className="weather-result">
            <h2>📍 {weather.city}</h2>
            <div className="temperature">{weather.temperature}°C</div>
            <div className="condition">{weather.condition}</div>
            <div className="description">{weather.description}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;