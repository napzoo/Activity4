# 🌤️ Weather Proxy API

A full-stack weather application that provides real-time weather information with a beautiful, dynamic user interface that adapts to current weather conditions. Built with modern technologies including NestJS, React, and TypeScript.

![Weather App Demo](https://img.shields.io/badge/Status-Active-success)
![Node](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-18.3-blue)
![NestJS](https://img.shields.io/badge/NestJS-10.4-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)

## 📖 Overview

This project demonstrates a complete full-stack application that fetches weather data from the OpenWeatherMap API and displays it through an intuitive, visually stunning interface. The UI dynamically changes themes based on weather conditions, featuring smooth animations and gradient backgrounds.

### ✨ Key Features

- 🌍 **Real-time Weather Data** - Fetches current weather for any city worldwide
- 🎨 **Dynamic Themes** - UI automatically adapts colors and icons based on weather
- 🔄 **Smooth Animations** - Floating icons, pulsing effects, and seamless transitions
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 📚 **API Documentation** - Auto-generated Swagger/OpenAPI documentation
- 🚀 **Modern Tech Stack** - Built with cutting-edge technologies
- ♿ **Accessible** - Follows web accessibility best practices

### 🎭 Weather Themes

| Condition | Icon | Theme Colors |
|-----------|------|--------------|
| Sunny/Clear | ☀️ | Yellow → Orange gradients |
| Cloudy | ☁️ | White → Light Blue gradients |
| Rainy | 🌧️ | Blue → Dark Blue gradients |
| Stormy | ⛈️ | Dark Blue → Black gradients |
| Snowy | ❄️ | Light Blue gradients |
| Foggy | 🌫️ | Gray gradients |

## 🛠️ Technology Stack

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Axios** - HTTP client for API requests
- **Swagger** - API documentation
- **OpenWeatherMap API** - Weather data provider

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Axios** - HTTP client
- **CSS3** - Modern styling with animations

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Git** (for cloning the repository)

You'll also need:
- An **OpenWeatherMap API key** ([Get one free here](https://openweathermap.org/api))

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/napzoo/Activity4
cd Activity4
```

### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure your API key
# Open src/weather/weather.service.ts
# Replace API_KEY with your own key

# Start the backend server
npm run start:dev
```

✅ Backend will be running at: **http://localhost:3000**  
📚 API Documentation: **http://localhost:3000/api**

### 3. Setup Frontend

Open a **new terminal window**:

```bash
# Navigate to frontend directory
cd Activity4/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

✅ Frontend will be running at: **http://localhost:5173**

### 4. Start Using the App! 🎉

1. Open your browser and navigate to `http://localhost:5173`
2. Enter any city name (e.g., "Manila", "Tokyo", "London", "New York")
3. Click "Get Weather" or press Enter
4. Watch the magic happen! ✨

## 📁 Project Structure

```
Activity4/
├── backend/                    # NestJS Backend API
│   ├── src/
│   │   ├── weather/           # Weather module
│   │   │   ├── weather.controller.ts
│   │   │   ├── weather.service.ts
│   │   │   └── weather.module.ts
│   │   ├── app.module.ts      # Root module
│   │   └── main.ts            # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── frontend/                   # React Frontend
│   ├── src/
│   │   ├── App.tsx            # Main component
│   │   ├── App.css            # Styles & animations
│   │   ├── main.tsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md
│
└── README.md                   # This file
```

## 🔧 Configuration

### Backend Configuration

**Change Port** (default: 3000):
```typescript
// backend/src/main.ts
await app.listen(3000); // Change to your preferred port
```

**API Key Setup**:
```typescript
// backend/src/weather/weather.service.ts
private readonly API_KEY = 'your_api_key_here';
```

### Frontend Configuration

**Change Port** (default: 5173):
```typescript
// frontend/vite.config.ts
export default defineConfig({
  server: {
    port: 5173 // Change to your preferred port
  }
})
```

**Change Backend URL**:
```typescript
// frontend/src/App.tsx
const response = await axios.get('http://localhost:3000/weather', {
  // Update URL if backend runs elsewhere
});
```

## 📚 API Documentation

Once the backend is running, visit the interactive API documentation:

**Swagger UI**: http://localhost:3000/api

### API Endpoints

#### `GET /weather`

Retrieves weather data for a specified city.

**Query Parameters:**
- `city` (string, required) - Name of the city

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

**Status Codes:**
- `200` - Success
- `400` - Bad Request (missing city parameter)
- `404` - City not found
- `401` - Unauthorized (invalid API key)
- `500` - Internal Server Error

## 🧪 Testing

### Backend Tests

```bash
cd backend

# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run test coverage
npm run test:cov
```

### Frontend Tests

```bash
cd frontend

# Run tests
npm run test
```

## 🔄 Updating Dependencies

Keep your project up-to-date with the latest packages and security patches.

### Check for Updates

```bash
# Install npm-check-updates globally (one-time)
npm install -g npm-check-updates

# Backend - Check for updates
cd backend
ncu

# Frontend - Check for updates
cd frontend
ncu
```

### Update Dependencies

**Option 1: Automatic Update (Recommended)**

```bash
# Backend
cd backend
ncu -u                    # Update package.json
npm install              # Install updated packages
npm run start:dev        # Test that everything works

# Frontend
cd frontend
ncu -u                    # Update package.json
npm install              # Install updated packages
npm run dev              # Test that everything works
```

**Option 2: Manual Update**

```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Update Specific Packages

```bash
# Update a specific package
npm install package-name@latest

# Example: Update axios
npm install axios@latest
```

### Security Audit

```bash
# Check for security vulnerabilities
npm audit

# Automatically fix vulnerabilities
npm audit fix

# Fix with breaking changes (use with caution)
npm audit fix --force
```

### Version Management Tips

- ✅ **Always test** after updating dependencies
- ✅ **Update regularly** (monthly recommended)
- ✅ **Read changelogs** before major updates
- ✅ **Use `^` in package.json** for automatic minor/patch updates
- ✅ **Check breaking changes** for major version updates
- ✅ **Commit `package-lock.json`** to version control

## 🏗️ Building for Production

### Backend

```bash
cd backend

# Build the project
npm run build

# Run production build
npm run start:prod
```

### Frontend

```bash
cd frontend

# Build for production
npm run build

# Preview production build
npm run preview
```

The production-ready files will be in the `frontend/dist/` directory.

## 🚀 Deployment

### Backend Deployment Options

- **Heroku**: Deploy Node.js applications
- **Railway**: Modern deployment platform
- **DigitalOcean**: App Platform or Droplets
- **AWS**: EC2, Elastic Beanstalk, or Lambda
- **Render**: Free tier available

### Frontend Deployment Options

- **Vercel**: Optimized for React/Vite (Recommended)
- **Netlify**: Easy drag-and-drop deployment
- **GitHub Pages**: Free static hosting
- **Cloudflare Pages**: Fast global CDN
- **AWS S3 + CloudFront**: Scalable static hosting

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **401 Unauthorized Error** | Your API key is invalid or not activated yet. Wait 10-30 minutes after generating a new key. |
| **404 City Not Found** | Ensure you're using correct English city names. Try major cities first. |
| **Cannot connect to backend** | Verify backend is running on port 3000 and CORS is enabled. |
| **Port already in use** | Kill the process using the port or change the port in configuration. |
| **Blank page** | Check browser console for errors. Run `npm install` and clear cache. |
| **Styles not loading** | Hard refresh (Ctrl+Shift+R) or clear browser cache. |

### Debugging Tips

**Check Backend Logs:**
```bash
# Backend terminal will show detailed error messages
cd backend
npm run start:dev
# Watch the console output
```

**Test API Directly:**
```bash
# Use curl or visit in browser
curl "http://localhost:3000/weather?city=Manila"
```

**Check Frontend Console:**
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab for failed requests

## 🔒 Security Best Practices

- ✅ Never commit API keys to version control
- ✅ Use environment variables for sensitive data
- ✅ Add `.env` files to `.gitignore`
- ✅ Implement rate limiting in production
- ✅ Use HTTPS in production
- ✅ Keep dependencies updated
- ✅ Validate and sanitize user input

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

Created as part of **Activity 4: Weather Proxy API**

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) - Weather data API
- [NestJS](https://nestjs.com/) - Backend framework
- [React](https://react.dev/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the individual README files in `backend/` and `frontend/`
3. Open an issue in the GitHub repository
4. Check the API documentation at http://localhost:3000/api

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ using modern web technologies**

*Explore the weather with style!* 🌤️✨
