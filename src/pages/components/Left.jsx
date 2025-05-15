import { Heart, HomeIcon, MapPin, User } from "lucide-react";

export const Left = ({ city, temp }) => {
  return (
    <div className="w-[400px] h-[700px] bg-gray-900/40 rounded-3xl p-6 text-white flex flex-col justify-center items-center shadow-xl">
      <div className="w-full">
        <p className="text-gray-400 text-sm">September 10, 2021</p>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">{city.location?.name}</h2>
          <img src="localization_icon.svg" className="w-4 h-4" alt="location" />
        </div>
      </div>

      <img
        src="b6feb523f01b7c0c0765dab6de4f9f5cbb022e1d (1).png"
        className="w-[150px] mt-4"
        alt=""
      />

      <div className="text-center">
        <p className="text-[64px] font-bold">{temp} °C</p>
        <p className="text-purple-400 text-xl">Clear</p>
      </div>

      {/* <div className="flex gap-6 text-gray-400 mt-4">
        <img src="/icon_home.svg" className="w-6 h-6" />
        <img src="/icon_heart.svg" className="w-6 h-6" />
        <img src="/icon_user.svg" className="w-6 h-6" />
      </div> */}
      <div className=" flex items-center justify-between mt-20  ">
        <HomeIcon />
        <MapPin />
        <Heart />
        <User />
      </div>
    </div>
  );
};
