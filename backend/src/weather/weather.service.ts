import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  // Get your API key from: https://openweathermap.org/api
  private readonly API_KEY = 'ea62b126a5963dc1f68b9801a1410379'; // Replace this!
  private readonly BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  async getWeatherByCity(city: string) {
    try {
      const response = await axios.get(this.BASE_URL, {
        params: {
          q: city,
          appid: this.API_KEY,
          units: 'metric' // Use Celsius
        }
      });

      // Return simplified weather data
      return {
        city: response.data.name,
        temperature: response.data.main.temp,
        condition: response.data.weather[0].main,
        description: response.data.weather[0].description,
      };
    } catch (error) {
      if (error.response?.status === 404) {
        throw new HttpException(
          `City "${city}" not found`, 
          HttpStatus.NOT_FOUND
        );
      }
      throw new HttpException(
        'Error fetching weather data', 
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}