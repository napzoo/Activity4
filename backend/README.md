# Weather Proxy API - Backend

A NestJS-based backend service that acts as a proxy for the OpenWeatherMap API, providing simplified weather data endpoints.

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Typed superset of JavaScript
- **Axios** - HTTP client for API requests
- **Swagger** - API documentation
- **OpenWeatherMap API** - Weather data provider

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- An OpenWeatherMap API key ([Get one here](https://openweathermap.org/api))

## 🚀 Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <your-repo-url>
   cd Activity4/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure API Key**:
   - Open `src/weather/weather.service.ts`
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key:
   ```typescript
   private readonly API_KEY = 'your_actual_api_key_here';
   ```

## 🏃 Running the Application

### Development Mode
```bash
npm run start:dev
```
The server will start on `http://localhost:3000` with hot-reload enabled.

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

## 📚 API Documentation

Once the server is running, access the Swagger API documentation at:
```
http://localhost:3000/api
```

### Available Endpoints

#### GET /weather
Retrieve weather data for a specific city.

**Query Parameters:**
- `city` (required) - Name of the city (e.g., "Manila", "Tokyo", "London")

**Example Request:**
```bash
curl "http://localhost:3000/weather?city=Manila"
```

**Example Response:**
```json
{
  "city": "Manila",
  "temperature": 28.5,
  "condition": "Clouds",
  "description": "broken clouds"
}
```

**Response Codes:**
- `200` - Success
- `400` - Bad Request (missing city parameter)
- `404` - City not found
- `500` - Internal Server Error

## 📁 Project Structure

```
backend/
├── src/
│   ├── weather/
│   │   ├── weather.module.ts      # Weather module
│   │   ├── weather.controller.ts  # HTTP request handlers
│   │   └── weather.service.ts     # Business logic & API calls
│   ├── app.module.ts              # Root application module
│   └── main.ts                    # Application entry point
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md
```

## 🔧 Configuration

### CORS
CORS is enabled by default to allow frontend communication. Configured in `main.ts`:
```typescript
app.enableCors();
```

### Port
Default port is `3000`. To change it, modify `main.ts`:
```typescript
await app.listen(3000); // Change to your preferred port
```

## 🧪 Testing

Run unit tests:
```bash
npm run test
```

Run e2e tests:
```bash
npm run test:e2e
```

Run test coverage:
```bash
npm run test:cov
```

## 🐛 Troubleshooting

### Issue: 401 Unauthorized Error
**Solution:** Your API key is invalid or not activated yet. Wait 10-30 minutes after generating a new key.

### Issue: 404 City Not Found
**Solution:** Ensure you're using correct English city names. Try major cities first.

### Issue: 500 Internal Server Error
**Solution:** Check your console logs for detailed error messages. Verify your API key is correct.

### Issue: Cannot connect to OpenWeatherMap
**Solution:** Check your internet connection and verify the API endpoint is accessible.

## 📝 Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env` file:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   PORT=3000
   ```

2. Install dotenv:
   ```bash
   npm install @nestjs/config
   ```

3. Update `weather.service.ts` to use environment variables.

## 🔒 Security Notes

- Never commit your API key to version control
- Add `.env` to `.gitignore`
- Use environment variables for sensitive data
- Implement rate limiting for production use

## 📄 License

This project is licensed under the MIT License.

## 👥 Author

Created as part of Activity 4 - Weather Proxy API

## 🔗 Related Links

- [NestJS Documentation](https://docs.nestjs.com/)
- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📮 Support

For issues or questions, please open an issue in the GitHub repository.