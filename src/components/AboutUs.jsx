import React from 'react';

function UserInfo() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-24 pb-20">
        <img src="maxence.jpg" className="h-96 w-110 lg:h-auto lg:w-96"/>
        <div className="w-64">
          <p className="font-bold text-xl mb-4 text-center">Maxou</p>
          <p className="text-lg text-center">This is Maxence aka Maxou the loulou (and the goat), the co-creator of this website. He is a BTS SIO student in Lille and did this project in order to improve his developer panel and flourish in his future profession. He did this project to finance his travel to Turkish to recover his tanlines.</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-24">
        <div className="w-64">
          <p className="font-bold text-xl mb-4 text-center">Zazar</p>
          <p className="text-lg text-center">This is Anjara no, Anajara no, Amzar no, Anjar no, it's Zazar the co-creator of this web site, he is a BTS SIO student in Lille and did this project in order to improve his developer panel and flourish in his future profession.</p>
        </div>
        <div>
          <img src="Anjara.png" className="h-96 w-110 lg:h-auto lg:w-96"/>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-xl pb-2">This site has been developed to sell our various<br/>products and to bring a smile to people's faces with<br/>our magnificent top-of-the-range items.</p>
        <p className="text-base pb-12">The real reason is because our teacher asked it.</p>
      </div>
    </div>
  );
}

export default UserInfo;
