import React from 'react';
import LOGO1 from "../../assets/img/navbar/LOGO.png"

function Logo() {
  return <div className="flex items-center relative gap-5">
  <img src={LOGO1} alt="logo" className='h-32 ' />
  <div className="flex flex-col items-center gap-2">
    <h2 className='text-5xl font-bold text-cyan-800'>Детство</h2>
    <p className='text-xl text-violet-950'><sup>__</sup> торты для детей <sup>__</sup> </p>
  </div>
</div>;
}

export default Logo;
