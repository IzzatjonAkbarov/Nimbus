import React from "react";
import grid1 from "../../../shared/assets/images/grid1.png";
import grid2 from "../../../shared/assets/images/grid2.png";
import grid3 from "../../../shared/assets/images/grid3.png";
import grid4 from "../../../shared/assets/images/grid4.png";

const Friends2 = () => {
  return (
    <div>
      <h1 className="font-bold  text-center text-[20px] pb-5">
        Наша дружная команда
      </h1>

      <div className="container1 flex items-center gap-5 max-[1030px]:grid grid-cols-2 max-[650px]:grid-cols-1">
        <div>
          <img className="max-[650px]:w-full" src={grid1} alt="" />
        </div>
        <div className="flex  flex-col gap-5">
          <img className="max-[650px]:w-full" src={grid2} alt="" />
          <img className="max-[650px]:w-full" src={grid3} alt="" />
        </div>
        <div>
          <img
            className="h-[571px] w-[420px] max-[650px]:w-full max-[650px]:h-auto"
            src={grid4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Friends2;
