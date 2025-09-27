'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiBookOpen } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className='bg-[#FAF8F5] pt-12 pb-24 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Columna de Texto */}
          <motion.div
            className='text-center lg:text-left'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <p className='font-semibold text-gray-500 tracking-widest text-sm mb-2'>
              DESIGN - MANUFACTURE - RETAIL
            </p>
            <h1 className='text-5xl md:text-7xl font-serif font-bold text-gray-800 leading-tight'>
              Crafting Fashion, Building Brands.
            </h1>
            <p className='mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0'>
              From initial sketch to final stitch, we provide expert guidance to
              bring your apparel vision to life and build a successful retail
              presence.
            </p>

            {/* Bloque CTA */}
            <motion.div
              className='mt-10 p-6 bg-white rounded-xl shadow-sm flex items-center max-w-md mx-auto lg:mx-0'
              whileHover={{ scale: 1.03 }}
            >
              <div className='bg-red-100 p-4 rounded-full mr-5'>
                <FiBookOpen className='text-2xl text-[#D3A6A1]' />
              </div>
              <div>
                <h3 className='font-bold text-lg text-gray-800'>
                  Discover Our Process Now
                </h3>
                <p className='text-gray-600'>
                  Browse our full range of services.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna de Imagen */}
          <motion.div
            className='relative h-[500px]'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Formas de Fondo */}
            <div className='absolute top-10 right-10 w-48 h-96 bg-[#D3A6A1]/40 rounded-full blur-sm'></div>
            <div className='absolute bottom-10 left-10 w-72 h-48 bg-[#A1D3B9]/40 rounded-full blur-sm'></div>

            <div className='absolute inset-0 flex items-center justify-center'>
              <Image
                src='/images/heroCas.png'
                alt='Fashion design process collage'
                width={600}
                height={600}
                className='object-contain'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
