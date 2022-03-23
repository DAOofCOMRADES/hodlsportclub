import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">{mainHero.primaryAction.text}</div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            {mainHero.secondaryAction.text}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
