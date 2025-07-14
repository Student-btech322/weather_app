import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateWeatherInfo }) {
    let [city, setCity] = useState(" ");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "554f9be8f609d05155a890145a04b63a";

    let getWeatherInfo = async () => {
        try{
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let data = await response.json();
          console.log(data);
          let result = {
            city: data.name,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,   
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            feelsLike: data.main.feels_like,
            windSpeed: data.wind.speed,
            windDeg: data.wind.deg,
            visibility: data.visibility,
            weather: data.weather[0].description,
         };
         console.log(result);
         return result; 
        }catch (err) {
            throw err;
        }
    };

    let handleChange = async (e) => {
        setCity(e.target.value);
    };
    let handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log(`Searching weather for: ${city}`);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateWeatherInfo(newInfo);
        }catch (err) {
            setError(true);
        }
    };
    return (
        <div className="search-box">
            <h3 className='search-title'>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            {error && <p style = {{color: "red"}}>No such place exist!</p>}
            </form>
        </div>
    );
}
