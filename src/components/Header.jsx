import React from 'react'

const Header = () => {
  return (
    <header className=" text-white  ">
      <div className="container mx-auto px-6 py-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DexCrash</h1>
        <nav>
          <ul className="flex space-x-9 gap-10">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                RoadMap
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Whitepaer
              </a>
            </li>
            <div className='flex gap-6 '>
            <button className='bg-orange-500 px-6 py-1 rounded-lg  '> Staking</button>
            <button className='bg-orange-500 px-6 py-1 rounded-lg  '>Buy Now</button>
            </div>
          </ul>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;



