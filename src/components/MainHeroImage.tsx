import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="{top|right|bottom|left|inset}-{03}">
      <img
        className="h-full w-full object-fill sm:h-full md:h-100 lg:w-full lg:h-full"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
