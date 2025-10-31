import { useState } from 'react';
import './App.css';
import axios from 'axios';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  description: string;
}

interface WeatherTheme {
  icon: string;
  gradient: string;
  containerGradient: string;
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to get weather theme based on condition
  const getWeatherTheme = (condition: string): WeatherTheme => {
    const lowerCondition = condition.toLowerCase();
    
    // Sunny/Clear
    if (lowerCondition.includes('clear') || lowerCondition.includes('sunny')) {
      return {
        icon: '☀️',
        gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        containerGradient: 'linear-gradient(135deg, #FFD93D 0%, #FF6B35 100%)'
      };
    }
    
    // Cloudy
    if (lowerCondition.includes('cloud')) {
      return {
        icon: '☁️',
        gradient: 'linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 100%)',
        containerGradient: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 100%)'
      };
    }
    
    // Rainy/Drizzle
    if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
      return {
        icon: '🌧️',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00435d 100%)',
        containerGradient: 'linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)'
      };
    }
    
    // Stormy/Thunderstorm
    if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
      return {
        icon: '⛈️',
        gradient: 'linear-gradient(135deg, #1e3a8a 0%, #000000 100%)',
        containerGradient: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)'
      };
    }
    
    // Snow
    if (lowerCondition.includes('snow')) {
      return {
        icon: '❄️',
        gradient: 'linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%)',
        containerGradient: 'linear-gradient(135deg, #f0f9ff 0%, #bae6fd 100%)'
      };
    }
    
    // Mist/Fog/Haze
    if (lowerCondition.includes('mist') || lowerCondition.includes('fog') || lowerCondition.includes('haze')) {
      return {
        icon: '🌫️',
        gradient: 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)',
        containerGradient: 'linear-gradient(135deg, #e5e7eb 0%, #6b7280 100%)'
      };
    }
    
    // Default
    return {
      icon: '🌤️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      containerGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    };
  };

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

  const weatherTheme = weather ? getWeatherTheme(weather.condition) : null;

  return (
    <div 
      className="App" 
      style={{ 
        background: weatherTheme?.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        transition: 'background 0.5s ease'
      }}
    >
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

        {weather && weatherTheme && (
          <div 
            className="weather-result"
            style={{
              background: weatherTheme.containerGradient,
              transition: 'background 0.5s ease'
            }}
          >
            <div className="weather-icon">{weatherTheme.icon}</div>
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