export const Left = ({ temp }) => {
  return (
    <div class=" justify-items-center ... mt-60 ml-100px  bg-statos-blue/30 backdrop-blur-none   w-130 h-190">
      <div class="diplay-flex justify-items-center">
        <div>
          <p class="text-gray-600 dark:text-gray-400">September 10, 2021</p>
          <div class=" text-neutral-100 text-[48px] ">Ulaanbatar</div>
        </div>
        <div>
          <img
            class="ml-90 mt-[-70px] mt-[-80]"
            src="localization_icon.svg"
          ></img>
        </div>
        <img
          class="w-[262px] "
          src="b6feb523f01b7c0c0765dab6de4f9f5cbb022e1d (1).png"
        ></img>
        <p class="text-[90px] text-neutral-100">{temp}</p>
        <p class="text-[24px] bg-#777CCE">Clear</p>
      </div>
    </div>
  );
};
