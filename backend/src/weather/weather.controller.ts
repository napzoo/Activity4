import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WeatherService } from './weather.service';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiOperation({ summary: 'Get weather data by city name' })
  @ApiQuery({ 
    name: 'city', 
    required: true, 
    description: 'City name (e.g., Manila, Tokyo, London)',
    example: 'Manila'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Weather data retrieved successfully',
    schema: {
      example: {
        city: 'Manila',
        temperature: 28.5,
        condition: 'Clouds',
        description: 'broken clouds'
      }
    }
  })
  @ApiResponse({ status: 404, description: 'City not found' })
  async getWeather(@Query('city') city: string) {
    if (!city) {
      throw new HttpException('City parameter is required', HttpStatus.BAD_REQUEST);
    }
    
    return this.weatherService.getWeatherByCity(city);
  }
}