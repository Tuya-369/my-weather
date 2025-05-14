import { Right } from "./components/right";
import { Left } from "./components/left";
import { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});

  const cityUrl = `https://api.api-ninjas.com/v1/city?name=Tokyo`;

  const getCity = async () => {
    try {
      const response = await fetch(cityUrl, {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getWeather = async () => {
    try {
      const cityLocation = await getCity();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[0].latitude}&lon=${cityLocation[0].longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&appid=5120d84c09dd95b2b6c330716f47814e`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(weather);
  return (
    <div className="flex gap-2 justify-center">
      <div className="w-[800px] h-[1200px] bg-slate-100">
        <button onClick={getWeather}>click me</button>

        <Right temp={weather?.main?.temp_max} />
      </div>
      <div className="w-[800px] h-[1200px] bg-slate-900">
        <div>
          <Left temp={weather?.main?.temp_max} />
        </div>
      </div>
    </div>
  );
}
