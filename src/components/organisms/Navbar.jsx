'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { CartContext } from 'ui-old-version';

const Navbar = ({ isHome = true, withCart = false }) => {
  const { products } = useContext(CartContext);
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className='w-full'
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Barra Superior de Contacto */}
      <div className='bg-[#D3A6A1] text-white text-xs py-2'>
        <div className='container mx-auto px-6 flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <span className='flex items-center'>
              <FiPhone className='mr-1.5' /> {dataSite.telephone}
            </span>
            <span className='hidden md:flex items-center'>
              <FiMapPin className='mr-1.5' /> {dataSite.address}
            </span>
          </div>
          <span className='hidden sm:flex items-center'>
            <FiMail className='mr-1.5' /> {dataSite.email}
          </span>
        </div>
      </div>

      {/* Barra de Navegación Principal */}
      <nav className='bg-[#FAF8F5] py-4'>
        <div className='container mx-auto px-6 flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/images/logoCas.png'
              alt='Castañeda P.C. Logo'
              width={40}
              height={40}
            />
            <span className='ml-2 text-2xl font-semibold text-gray-800'>
              Castañeda P.C.
            </span>
          </div>

          {/* Links de Navegación */}
          {isHome && (
            <div className='hidden lg:flex items-center space-x-8'>
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  className='text-gray-700 font-medium hover:text-[#D3A6A1] transition-colors'
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Botón de Consulta */}
          {!withCart ? (
            <a
              href='/contact'
              className='hidden lg:inline-block bg-[#A1D3B9] text-gray-800 font-bold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all'
            >
              Get a Consultation
            </a>
          ) : (
            <ButtonCart items={products.length} />
          )}

          {/* Menú Móvil (Icono) */}
          <div className='lg:hidden'>
            <button className='text-gray-800 text-3xl'>☰</button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

const ButtonCart = ({ items }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/my-cart')}
      className='relative text-gray-800'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
      <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
        {items}
      </span>
    </button>
  );
};

export default Navbar;
