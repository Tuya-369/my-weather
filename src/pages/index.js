import { Right } from "./components/right";
import { Search } from "lucide-react";
import { Left } from "./components/left";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [searchCity, setSearchCity] = useState("Ulaanbaatar");
  const getWeather = async () => {
    try {
      // const cityLocation = await getCity();

      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${searchCity}`
      );

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);
  console.log(weather);

  return (
    <div className=" flex justify-center items-center ">
      <div>
        <input
          type="search"
          placeholder="Search"
          value={searchCity}
          onChange={(event) => {
            const value = event.target.value;
            setSearchCity(value);
          }}
          className=" border-0 h-18 w-100 t-40 rounded-full bg-gray-50"
        ></input>
        <button onClick={getWeather}>click me</button>
      </div>
      <div className=" pt-50 pl-50 w-[800px] h-[1200px] bg-slate-100">
        <Right temp={weather?.current?.temp_c} city={weather} />
      </div>
      <div className=" pt-50 pl-50 w-[800px] h-[1200px] bg-slate-900">
        <Left
          temp={weather?.forecast?.farecastday?.[0]?.day?.mintemp_c}
          city={weather}
        />
      </div>
    </div>
  );
}
