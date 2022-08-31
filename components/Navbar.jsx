import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose,AiFillFacebook, AiOutlineMenu, AiFillInstagram } from 'react-icons/ai';




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#fff');


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='bg-[#667d83] flex justify-between items-center w-full h-full px-20 2xl:px-16 '>
        <Link href='/'>
          <a>
         
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillInstagram size={42}/>
          </div>
          </a>
        </Link>
        <Link href='/'>
          <a>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillFacebook size={42}/>
          </div>
        
          </a>
        </Link>
        <div className = "container items-center ">
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 mx-12 text-sm uppercase hover:border-b'>
              <Link href='/'>Accueil</Link>
            </li>
            <li className='mx-14  text-sm uppercase hover:border-b'>
              <Link href='/#gallery'>Gallerie</Link>
            </li>
            <li className='ml-10 mx-16  text-sm uppercase hover:border-b'>
              <Link href='/#tarif'>Tarifs et spécification</Link>
            </li>
            <li className='ml-10 mx-18 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
             
            <Link href='/'>
          <a>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillFacebook size={25}/>
          </div>
        
          </a>
        </Link>
        <Link href='/'>
          <a>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillInstagram size={25}/>
          </div>
        
          </a>
        </Link>

              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-1  cursor-pointer'
              >
                <AiOutlineClose size ={25}/>
              </div>
            </div>
          
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                 Accueil
                </li>
              </Link>
              <Link href='/#gallery'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Gallerie
                </li>
              </Link>
              <Link href='/#tarif'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Tarif et spécification
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;