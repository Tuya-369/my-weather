export const Right = ({ temp }) => {
  return (
    <div class="justify-items-center ... mt-60 bg-white/40 backdrop-blur-md   w-130 h-190 ">
      <div class=" ">
        <div>
          <p class="text-gray-600 dark:text-gray-400">September 10, 2021</p>
          <div class=" text-[48px] pb-10  ">Ulaanbatar</div>
        </div>
        <div>
          <img
            class="ml-90 mt-[-70px] mt-[-80]"
            src="localization_icon.svg"
          ></img>
        </div>
        <img
          class="w-[262px] "
          src="3c6bbabb0657324bf17d1bd5169b60a7fbcb80b1.png"
        ></img>
        <p class="text-[90px]">{temp}</p>
        <p>Clear</p>
      </div>
    </div>
  );
};
