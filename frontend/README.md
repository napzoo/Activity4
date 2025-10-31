# Weather Proxy API - Frontend

A modern, responsive React application that displays weather information with dynamic themes based on current weather conditions.

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Next-generation frontend build tool
- **Axios** - Promise-based HTTP client
- **CSS3** - Styling with animations and gradients

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Backend server running on `http://localhost:3000`

## 🚀 Installation

1. **Navigate to the frontend directory**:
   ```bash
   cd Activity4/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5173` with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## ✨ Features

### 🎨 Dynamic Weather Themes

The application automatically changes its appearance based on weather conditions:

| Weather Condition | Icon | Background Gradient | Container Gradient |
|------------------|------|---------------------|-------------------|
| Sunny/Clear | ☀️ | Yellow → Orange | Bright Yellow → Orange |
| Cloudy | ☁️ | Light Gray → Light Blue | White → Sky Blue |
| Rainy | 🌧️ | Blue → Dark Blue | Blue → Navy |
| Stormy | ⛈️ | Dark Blue → Black | Dark Navy → Black |
| Snowy | ❄️ | Light Blue → Sky Blue | Ice Blue → Light Blue |
| Foggy/Misty | 🌫️ | Light Gray → Gray | Gray → Dark Gray |

### 🌟 Interactive Animations

- **Floating Weather Icon** - Gentle up-and-down animation
- **Pulsing Background** - Subtle radial pulse effect
- **Smooth Transitions** - 0.5s ease transitions between themes
- **Fade-in Effects** - Weather results animate into view

### 📱 Responsive Design

- Mobile-friendly layout
- Adapts to different screen sizes
- Touch-optimized interface

## 📁 Project Structure

```
frontend/
├── src/
│   ├── App.tsx           # Main application component
│   ├── App.css           # Styling and animations
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Usage

1. **Start the backend server** (must be running on port 3000)
2. **Start the frontend application**
3. **Enter a city name** in the search box (e.g., "Manila", "Tokyo", "London")
4. **Click "Get Weather"** or press Enter
5. **View the results** with dynamic theme and animations

### Example Cities to Try

- **Sunny Weather**: Dubai, Los Angeles, Phoenix
- **Cloudy Weather**: London, Seattle, San Francisco
- **Rainy Weather**: Mumbai, Singapore, Portland
- **Varied Conditions**: Try your local city!

## ⚙️ Configuration

### Change Backend URL

If your backend runs on a different port or domain, update the API endpoint in `App.tsx`:

```typescript
const response = await axios.get('http://localhost:3000/weather', {
  params: { city: city.trim() }
});
```

Change `http://localhost:3000` to your backend URL.

### Customize Port

To change the frontend port, modify `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173 // Change to your preferred port
  }
})
```

## 🎨 Customization

### Adding New Weather Conditions

To add support for new weather conditions, edit the `getWeatherTheme` function in `App.tsx`:

```typescript
// Add new condition
if (lowerCondition.includes('your-condition')) {
  return {
    icon: '🌈', // Your emoji
    gradient: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
    containerGradient: 'linear-gradient(135deg, #color3 0%, #color4 100%)'
  };
}
```

### Modifying Animations

Edit `App.css` to customize animations:

```css
.weather-icon {
  animation: float 3s ease-in-out infinite; /* Adjust timing */
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); } /* Adjust distance */
}
```

## 🐛 Troubleshooting

### Issue: Cannot connect to backend
**Solution:** Ensure the backend server is running on `http://localhost:3000` and CORS is enabled.

### Issue: Weather data not displaying
**Solution:** 
- Check browser console for errors
- Verify the backend API is responding correctly
- Test the API endpoint directly in your browser

### Issue: Blank page or white screen
**Solution:**
- Run `npm install` to ensure all dependencies are installed
- Clear browser cache
- Check console for JavaScript errors

### Issue: Styles not loading
**Solution:**
- Ensure `App.css` is properly imported in `App.tsx`
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)

## 📦 Dependencies

Main dependencies:
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `axios`: ^1.7.7
- `typescript`: ^5.5.3

Dev dependencies:
- `vite`: ^5.4.10
- `@vitejs/plugin-react`: ^4.3.3

## 🔧 Build & Deployment

### Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files ready for deployment.

### Deployment Options

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Static hosting**: Upload `dist/` folder contents

### Environment Variables

For production, update the API URL using environment variables:

1. Create `.env` file:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

2. Use in code:
   ```typescript
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
   ```

## 📄 License

This project is licensed under the MIT License.

## 👥 Author

Created as part of Activity 4 - Weather Proxy API

## 🔗 Related Links

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Axios Documentation](https://axios-http.com/)

## 📮 Support

For issues or questions, please open an issue in the GitHub repository.

---

**Enjoy exploring weather with beautiful, dynamic themes! 🌤️✨**