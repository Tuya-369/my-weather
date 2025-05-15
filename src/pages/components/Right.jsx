import { Heart, HomeIcon, MapPin, User } from "lucide-react";

export const Right = ({ temp, city }) => {
  return (
    <div className="w-[400px] h-[700px] bg-gray-200/40 rounded-3xl p-6 text-black flex flex-col justify-center items-center shadow-xl">
      <div className="w-full">
        <p className="text-gray-400 text-sm">September 10, 2021</p>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-semibold">{city.location?.name}</h2>
          <img src="localization_icon.svg" className="w-4 h-4" alt="" />
        </div>
      </div>

      <img
        src="3c6bbabb0657324bf17d1bd5169b60a7fbcb80b1.png"
        className="w-[150px] my-6"
        alt=""
      />

      <div className="text-center">
        <p className="text-[64px] font-bold">{temp}°C</p>
        <p className="text-purple-400 text-lg">Moderate rain</p>
      </div>

      <div className=" flex items-center justify-between mt-20 g-20px ">
        <HomeIcon />
        <MapPin />
        <Heart />
        <User />
      </div>
    </div>
  );
};
