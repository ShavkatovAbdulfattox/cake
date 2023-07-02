import React from "react";
import LOGO1 from "../../assets/img/navbar/LOGO3.png";

function Logo() {
  return (
    <div className="flex items-center relative xl:gap-5 gap-2 ">
      <img src={LOGO1} alt="logo" className="xl:h-32 md:h-28 h-16" />
      <div className="flex flex-col items-center md:gap-2">
        <h2 className="xl:text-5xl md:text-2xl text-lg font-bold text-cyan-800">Детство</h2>
        <p className="xl:text-xl text-sm text-violet-950">
          <sup>_</sup> торты для детей <sup>_</sup>{" "}
        </p>
      </div>
      
    </div>
  );
}

export default Logo;
