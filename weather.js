document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '1db902b08ed6c1da09f1985dbeb81edb';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const weatherInfoElement = document.getElementById('weather-info');

    async function getWeather() {
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value.trim();

        if (!city) {
            alert('Please enter a city name');
            return;
        }

        try {
            const response = await fetch(${apiUrl}?q=${city}&appid=${apiKey}&units=metric);
            const data = await response.json();

            if (response.ok) {
                const { main, weather } = data;
                const temperature = main.temp;
                const description = weather[0].description;

                const weatherText = Temperature: ${temperature}°C, ${description};
                weatherInfoElement.innerHTML = <p>${weatherText}</p>;
            } else {
                weatherInfoElement.innerHTML = '<p>Failed to fetch weather data</p>';
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfoElement.innerHTML = '<p>Failed to fetch weather data</p>';
        }
    }

    // Expose the getWeather function to the global scope
    window.getWeather = getWeather;
});