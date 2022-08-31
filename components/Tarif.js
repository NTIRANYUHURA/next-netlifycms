import React from 'react';
import { tarifs } from '../data/data.js';

const Tarif = () => {
  console.log(tarifs);
  return (
    <div id='tarif' className='max-w-[1640px] m-auto px-4 py-20'>
      <h1 className='text-black font-bold text-4xl text-center'>
        Tarifs et spécification
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 py-6'>
        {tarifs.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-3'
          >
            <h2 className='font-bold sm:text-xl'>{item.title}</h2>
            <p className='sm:text-xl'>{item.description}</p>
            <p className='sm:text-xl'>{item.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tarif;