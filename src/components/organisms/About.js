'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

// --- DATOS PARA EL COMPONENTE ---
const coreValues = [
  'Bespoke strategies for every client',
  'Commitment to quality and craftsmanship',
  'Sustainable and ethical sourcing guidance',
];

const stats = [
  // { value: '15+', label: 'Years of Experience' },
  { value: '10+', label: 'Brands Launched' },
  { value: '15+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  // { value: '10+', label: 'Industry Awards' },
];

const AboutUs = () => {
  return (
    <section id='about-us' className='bg-[#FAF8F5]'>
      {/* Parte 1: Foco en la Fundadora/Filosofía */}
      <div className='relative w-full min-h-[700px] flex items-center'>
        {/* Imagen de Fondo */}
        <Image
          src='/images/service3.png'
          alt='Fashion design studio background'
          layout='fill'
          objectFit='cover'
          className='z-0'
        />
        <div className='absolute inset-0 bg-black/30'></div>{' '}
        {/* Overlay oscuro para legibilidad */}
        <div className='container mx-auto px-6 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Columna de Texto */}
            <motion.div
              className='text-white'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className='font-semibold tracking-widest text-sm mb-2'>
                OUR PHILOSOPHY
              </p>
              <h2 className='text-5xl md:text-6xl font-serif font-bold leading-tight'>
                Passion Woven into Every Thread
              </h2>
              <p className='mt-6 text-lg max-w-lg'>
                Castañeda P.C. was born from a passion for craftsmanship and a
                vision to empower fashion entrepreneurs. We believe every great
                brand is built on a foundation of quality, creativity, and
                strategic insight.
              </p>
              <ul className='mt-6 space-y-3'>
                {coreValues.map((value) => (
                  <li key={value} className='flex items-center'>
                    <FiCheck className='text-[#A1D3B9] mr-3' />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
              {/* <button className='mt-10 bg-[#A1D3B9] text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all'>
                Learn Our Story
              </button> */}
            </motion.div>

            {/* Columna de Imagen (Retrato) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src='/images/service4.png'
                alt='Founder of Castañeda P.C.'
                width={400}
                height={533}
                className='mx-auto'
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Parte 2: Barra de Estadísticas */}
      <div className='bg-[#D3A6A1] text-white py-12'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className='text-4xl font-bold font-serif'>{stat.value}</p>
                <div className='w-10 h-px bg-white/50 mx-auto my-2'></div>
                <p className='text-sm font-semibold'>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
