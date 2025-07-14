import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 26.5,
        temp_min: 24.0,
        temp_max: 29.0,
        humidity: 60,
        pressure: 1012,
        windSpeed: 5.1,
        windDeg: 180,
        visibility: 10000,
        weather: "Clear sky"
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Weather App</h1>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}
