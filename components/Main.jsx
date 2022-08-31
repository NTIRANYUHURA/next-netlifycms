import Link from 'next/link';
import React from 'react';
import Image from 'next/image'


const Main = () => {
  return (
    <div id='home' className='bg-[#44565b]'>
      <div className=''>
        <div className = 'container max-w-screen-lg mx-auto pb-10 flex justify-center my-30'>
        < Image 
        src="/images/logo4.png"
        alt="logo"
        width={750}
        height={700}
      />
        </div>
      </div>
    </div>
  );
};

export default Main;