export const Right = ({ temp }) => {
  return (
    <div className="w-[300px] h-[500px] bg-white rounded-3xl p-6 text-black flex flex-col justify-between items-center shadow-xl">
      <div className="w-full">
        <p className="text-gray-400 text-sm">May 15, 2025</p>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-semibold">Ulaanbaatar</h2>
          <img src="localization_icon.svg" className="w-4 h-4" alt="location" />
        </div>
      </div>

      <img
        src="3c6bbabb0657324bf17d1bd5169b60a7fbcb80b1.png"
        className="w-[150px] my-6"
        alt=""
      />

      <div className="text-center">
        <p className="text-[64px] font-bold">
          {temp}°C 
        </p>
        <p className="text-purple-400 text-lg">Moderate rain</p>
      </div>

      <div className="flex gap-6 text-gray-500 mt-4">
        <img src="/icon_home.svg" className="w-6 h-6" />
        <img src="/icon_heart.svg" className="w-6 h-6" />
        <img src="/icon_user.svg" className="w-6 h-6" />
      </div>
    </div>
  );
};
