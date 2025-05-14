export const Left = ({ temp }) => {
  return (
    <div className="w-[300px] h-[500px] bg-[#0B0F2C] rounded-3xl p-6 text-white flex flex-col justify-between items-center shadow-xl">
      <div className="w-full">
        <p className="text-gray-400 text-sm">September 10, 2021</p>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Ulaanbaatar</h2>
          <img src="localization_icon.svg" className="w-4 h-4" alt="location" />
        </div>
      </div>

      <img
        src="b6feb523f01b7c0c0765dab6de4f9f5cbb022e1d (1).png"
        className="w-[150px] mt-4"
        alt=""
      />

      <div className="text-center">
        <p className="text-[64px] font-bold">{temp} °C  </p>
        <p className="text-purple-400 text-xl">Clear</p>
      </div>

      <div className="flex gap-6 text-gray-400 mt-4">
        <img src="/icon_home.svg" className="w-6 h-6" />
        <img src="/icon_heart.svg" className="w-6 h-6" />
        <img src="/icon_user.svg" className="w-6 h-6" />
      </div>
    </div>
  );
};
