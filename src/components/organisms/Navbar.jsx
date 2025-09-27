'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Navbar = () => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Process', href: '#process' },
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
              <FiPhone className='mr-1.5' /> +1 (234) 567 89 00
            </span>
            <span className='hidden md:flex items-center'>
              <FiMapPin className='mr-1.5' /> SHOWROOM: 123 FASHION AVE, CDMX
            </span>
          </div>
          <span className='hidden sm:flex items-center'>
            <FiMail className='mr-1.5' /> CONSULTAS@CASTANEDA.COM
          </span>
        </div>
      </div>

      {/* Barra de Navegación Principal */}
      <nav className='bg-[#FAF8F5] py-4'>
        <div className='container mx-auto px-6 flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/logo.svg'
              alt='Castañeda P.C. Logo'
              width={40}
              height={40}
            />
            <span className='ml-2 text-2xl font-semibold text-gray-800'>
              Castañeda P.C.
            </span>
          </div>

          {/* Links de Navegación */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                href='#'
                key={link.href}
                className='text-gray-700 font-medium hover:text-[#D3A6A1] transition-colors'
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botón de Consulta */}
          <a
            href='#contact'
            className='hidden lg:inline-block bg-[#A1D3B9] text-gray-800 font-bold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all'
          >
            Get a Consultation
          </a>

          {/* Menú Móvil (Icono) */}
          <div className='lg:hidden'>
            <button className='text-gray-800 text-3xl'>☰</button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
