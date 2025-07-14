import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({ info }) {
    const INIT_URL = 
       "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = 
       "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = 
       "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL = 
       "https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="info-box">
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 70 
                        ? RAINY_URL 
                        : info.temp > 30 
                        ? HOT_URL 
                        : info.temp < 15 
                        ? COLD_URL 
                        : INIT_URL
                    }
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {info.city} {
                        info.humidity > 80
                        ? <ThunderstormIcon />
                        : info.temp > 30 
                        ? <SunnyIcon />
                        : info.temp < 15 
                        ? <AcUnitIcon />
                        : <></>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', component: 'div' }}>
                      <p>Temperature: {info.temp}°C</p>
                      <p>Min Temperature: {info.temp_min}°C</p>
                      <p>Max Temperature: {info.temp_max}°C</p>
                      <p>Humidity: {info.humidity}%</p>
                      <p>Pressure: {info.pressure} hPa</p>
                      <p>Wind Speed: {info.windSpeed} m/s</p>
                      <p>Wind Direction: {info.windDeg}°</p>
                      <p>Visibility: {info.visibility} m</p>
                      <p>The Weather can be described as <i><b>{info.weather}</b></i> and feels like temperature of <b>{info.feelsLike}°C</b></p>
                    </Typography>
                  </CardContent>
                </Card>
        </div>    
    )
}