import React, { useState } from 'react';
import { data } from '../data/data.js';

const Gallery = () => {
  //   console.log(data);
  const [galleries, setGalleries] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setGalleries(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };


  return (
    <div id='gallery' className='max-w-[1640px] m-auto px-4 py-12 mx-'>
      <h1 className='text-grean-600 font-bold text-4xl text-center py-20 '>
        Galleries des Photos
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between '>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-black text-center '>Choisir categories d'Images</p>
          <div className='flex justfiy-between flex-wrap font-bold content-center'>
            <button
              onClick={() => setGalleries(data)}
              className=' m-10 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white/100'
            >
              Tout
            </button>
            <button
              onClick={() => filterType('mariage')}
              className=' m-10 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white/100'
            >
              Mariages
            </button>
            <button
              onClick={() => filterType('grosesse')}
              className=' m-10 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white/100'
            >
              Grosesse
            </button>
            <button
              onClick={() => filterType('bébé')}
              className=' m-10 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white/100'
            >
              Bébés
            </button>
            <button
              onClick={() => filterType('couple')}
              className=' m-10 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white/100'
            >
              Couple
            </button>
            <button
              onClick={() => filterType('famille')}
              className=' m-10 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white/100'
            >
              Famille
            </button>
            <button
              onClick={() => filterType('baptême')}
              className=' m-10 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white/100'
            >
              Baptême
            </button>
          </div>
        </div>


      </div>

      {/* Display images */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {galleries.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;